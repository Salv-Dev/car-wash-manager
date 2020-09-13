import React, { useState } from 'react';
import Modal from 'react-native-modal';
import RadioButton from 'radio-buttons-react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Container, TitleForm, ClientInput, TitleInput, SelectDate, TextDate, DateInput, Title, Services, SendButton, TextButton } from './styles'; 

const radio_props = [
    {label: 'Lavagem Simples'},
    {label: 'Lavagem completa c/ cera'},
    {label: 'Lavagem completa s/ cera'}
];

const select_props = [
    {label: 'Fulano de tal', value: 'Fulano de tal'},
    {label: 'Ciclano de tal', value: 'Ciclano de tal'},
    {label: 'Corinthians', value: 'Corinthians'},
    {label: 'Brasil', value: 'Brasil'}
]

export default function Scheduling({ show, close }) {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [date, setDate] = useState('12/09/2020 - 20:00 - Selecione o horário');

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

        console.log(typeof hour);

        if(hour >= 17 && minutes > 0){
            return 'fora do expediente';
        } else if(hour < 8) {
            return 'fora do expediente';
        } else {
            return `${day < 10? "0"+day : day}/${month < 10? "0"+month : month}/${year} - ${hour < 10? "0"+hour : hour}:${minutes < 10? "0"+minutes : minutes}`;
        }
    }

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
                        selectedValue={"Corinthians"}
                        onValueChange={() => {}}
                    >
                        <Picker.Item label="Fulano" value="Fulano" />
                        <Picker.Item label="Ciclano" value="Ciclano" />
                        <Picker.Item label="Corinthians" value="Corinthians" />
                        <Picker.Item label="Brasil" value="Brasil" />
                    </Picker>
                </ClientInput>
                <DateInput>
                    <TitleInput>Horário</TitleInput>
                    <SelectDate onPress={showDatePicker}>
                        <TextDate>{date}</TextDate>
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
                        selectedBtn={() => {}}
                        box={false}
                        circleSize={8}
                        activeColor="#1cade8"
                        deactiveColor="#1cade8"
                        initial={1}
                    />
                </Services>
                <SendButton onPress={() => {}}>
                    <TextButton>Agendar</TextButton>
                </SendButton>
            </Container>
        </Modal>
    )
}