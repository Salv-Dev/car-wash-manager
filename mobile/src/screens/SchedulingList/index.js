import React, { useState, useEffect, useReducer } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import api from './../../services/api';
import { socket } from './../../services/socket';

import Schedule from './../../components/Schedule';
import ModalSchedule from './../../modals/AddSchedule';

import { Container } from './styles';

const scheduleListReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, ...action.payload];
        case 'DEL':
            return state.filter(item => item.id !== action.payload[0].id);
        case 'EDIT':
            return state.map(item => item.id == action.payload[0].id ? action.payload[0] : item);
        default:
            throw new Error();
    }
}

export default function SchedulingList() {
    const [modal, setModal] = useState(false);
    const [state, dispatch] = useReducer(scheduleListReducer, []);

    const handleScheduleList = (type, payload) => {
        dispatch({ type, payload });
    }

    useEffect(() => {
        socket.on('getRemovedService', data => {
            handleScheduleList('DEL', [data]);
        });
        socket.on('getAddService', data => {
            handleScheduleList('ADD', [data]);
        });
        socket.on('editService', data => {
            handleScheduleList('EDIT', [data]);
        })
    }, []);
    
    useEffect(() => {
        api.get('schedules').then(response => {
            handleScheduleList('ADD', response.data);
        })
    }, []);

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data = { state }
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