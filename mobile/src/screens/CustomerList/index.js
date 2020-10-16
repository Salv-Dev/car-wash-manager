import React, { useState, useEffect, useReducer } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import Customer from './../../components/Customer';
import { Entypo } from '@expo/vector-icons';
import api from './../../services/api';
import { socket } from './../../services/socket';

const customerReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, ...action.payload];
        default:
            throw new Error();
    }
};

import ModalCustomer from './../../modals/AddCustomer';
import { Container, MenuApp, BtnMenu, TitleApp } from './styles';

export default function CustomerList({ navigation }) {
    const [modal, setModal] = useState(false);
    const [state, dispatch] = useReducer(customerReducer, []);

    const handleCustomerList = (type, payload) => {
        dispatch({ type, payload });
    }

    useEffect(() => {
        socket.on('getAddClient', data => {
            handleCustomerList('ADD', [data]);
        })
    }, [])

    useEffect(() => {
        api.get('clients').then(response => {
            handleCustomerList('ADD', response.data);
        }).catch(err => console.log(err));
    }, [])

    return (
        <>
            <MenuApp>
                <BtnMenu onPress={() => navigation.openDrawer()}>
                    <Entypo name="menu" size={26} color="#fff" />
                </BtnMenu>
                <TitleApp>Car-wash Manager</TitleApp>
            </MenuApp>
            <Container>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data = { state }
                    initialNumToRender={10}
                    renderItem = { ({ item }) => <Customer content={item}/> }
                    keyExtractor={(item, index) => index.toString()}
                />

                <ActionButton 
                    buttonColor="#1cade8"
                    onPress={() => setModal(true)}
                />
                    
                <ModalCustomer 
                    show={modal}
                    close={() => setModal(false)}
                />

            </Container>
        </>
    )
}