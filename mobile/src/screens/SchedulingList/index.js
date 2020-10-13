import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import api from './../../services/api';

import Schedule from './../../components/Schedule';
import ModalSchedule from './../../modals/AddSchedule';

import { Container } from './styles';

export default function SchedulingList() {
    const [modal, setModal] = useState(false);
    const [schedule, setSchedule] = useState([]);
    
    useEffect(() => {
        api.get('schedules').then(response => {
            setSchedule(response.data);
        })
    }, [])

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data = { schedule }
                initialNumToRender={10}
                renderItem = { ({ item }) => <Schedule content={item} completed={false}/> }
                keyExtractor={(item, index) => index.toString()}
            />

            <ActionButton 
                buttonColor="#1cade8"
                onPress={() => setModal(true)}
            />
                
            <ModalSchedule
                show={modal}
                close={() => setModal(false)}
            />

        </Container>
    )
}