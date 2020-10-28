import React, { useState, useEffect, useReducer } from 'react';
import Modal from 'react-native-modal';
import RadioButton from 'radio-buttons-react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import api from './../../services/api';

import { Container, TitleForm, ClientInput, TitleInput, SelectDate, TextDate, DateInput, Title, Services, SendButton, TextButton } from './styles'; 
import { socket } from '../../services/socket';

const radio_props = [
    {label: 'Lavagem Simples'},
    {label: 'Lavagem completa c/ cera'},
    {label: 'Lavagem completa s/ cera'}
];

const listClientReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, ...action.payload];
        default:
            throw new Error();
    }
}

export default function Scheduling({ show, close }) {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [date, setDate] = useState('00/00/0000 - 00:00 - Selecione o horário');
    const [isDate, setIsDate] = useState(true);
    const [selectedClient, setSelectedClient] = useState();
    const [selectedService, setSelectedService] = useState();
    const [state, dispatch] = useReducer(listClientReducer, []);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    }

    const handleConfirm = (date) => {
        setDate(formatDate(date));
        hideDatePicker();
    }

    const formatDate = (d) => {
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const hour = d.getHours();
        const minutes = d.getMinutes();

        if(hour >= 17 && minutes > 0){
            setIsDate(false);
            return 'fora do expediente';
        } else if(hour < 8) {
            setIsDate(false);
            return 'fora do expediente';
        } else {
            setIsDate(true);
            return `${day < 10? "0"+day : day}/${month < 10? "0"+month : month}/${year} - ${hour < 10? "0"+hour : hour}:${minutes < 10? "0"+minutes : minutes}`;
        }
    }

    const handleListClient = (type, payload) => {
        dispatch({ type, payload });
    }

    const submitSchedule = () => {
        if(date == 'fora do expediente' || date == '00/00/0000 - 00:00 - Selecione o horário') {
            setIsDate(false);
            return;
        };

        const schedule = {
            client_name: selectedClient,
            date,
            service: selectedService
        };

        api.post('schedule', schedule);
        close();
    }

    useEffect(() => {
        socket.on('getAddClient', data => {
            handleListClient('ADD', [data]);
        })
    }, [])

    useEffect(() => {
        api.get('clients').then(response => {
            handleListClient('ADD', response.data)
        }).catch(err => console.log(err));
    }, [])

    let PickerItems = state.map((client) => {
        return <Picker.Item key={client.id} label={client.name} value={client.name} />
    })

    return (
        <Modal
            isVisible={show}
            onBackdropPress={close}
        >
            <Container>
                <TitleForm>Agendar serviço</TitleForm>
                <ClientInput>
                    <TitleInput>Cliente</TitleInput>
                    <Picker
                        selectedValue={selectedClient}
                        onValueChange={(value, index) => {
                            setSelectedClient(value);
                        }}
                    >
                        { PickerItems }
                    </Picker>
                </ClientInput>
                <DateInput>
                    <TitleInput>Horário</TitleInput>
                    <SelectDate onPress={showDatePicker}>
                        <TextDate isDate={isDate}>{date}</TextDate>
                    </SelectDate>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        is24Hour={true}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </DateInput>
                <Services>
                    <Title>Serviços</Title>
                    <RadioButton 
                        data={radio_props}
                        selectedBtn={(value) => { 
                            setSelectedService(value.label);
                        }}
                        box={false}
                        circleSize={8}
                        activeColor="#1cade8"
                        deactiveColor="#1cade8"
                        initial={1}
                    />
                </Services>
                <SendButton onPress={submitSchedule}>
                    <TextButton>Agendar</TextButton>
                </SendButton>
            </Container>
        </Modal>
    )
}