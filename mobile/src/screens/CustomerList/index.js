import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import Customer from './../../components/Customer';
import { Entypo } from '@expo/vector-icons';

import ModalCustomer from './../../modals/AddCustomer';
import { Container, MenuApp, BtnMenu, TitleApp } from './styles';

export default function CustomerList({ navigation }) {
    const [modal, setModal] = useState(false);

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
                    data = { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
                    initialNumToRender={10}
                    renderItem = { ({ item }) => <Customer /> }
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