import React, { useState, useEffect, useReducer} from 'react';
import { FlatList } from 'react-native';
import Schedule from './../../components/Schedule';
import api from './../../services/api';
import { socket } from './../../services/socket';

import { Container } from './styles';

const initialState = [];

const completedServiceReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, ...action.payload];
        default:
            throw new Error();
    }
}

export default function CompletedList() {
    const [state, dispatch] = useReducer(completedServiceReducer, initialState);

    const addService = (payload) => {
        dispatch({ type: 'ADD', payload})
    };

    const getService = async () => {
        const response = await api.get('completed');
        const data = await response.data;
        addService(data);
    };

    useEffect(() => {
        socket.on('getCompletedService', data => {
            addService([data]);
        });
    }, []);
    
    useEffect(() => {
        getService();
    }, []);


    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data = { state }
                initialNumToRender={10}
                renderItem = { ({ item }) => <Schedule content={item} completed={true}/> }
                keyExtractor={(item, index) => index.toString()}
            />

        </Container>
    )
}