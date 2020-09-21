import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import Customer from './../../components/Customer';

import ModalCustomer from './../../modals/AddCustomer';
import { Container } from './styles';

export default function CustomerList() {
    const [modal, setModal] = useState(false);

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data = { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
                initialNumToRender={10}
                renderItem = { ({ item }) => <Customer /> }
                keyExtractor={(item, index) => index.toString()}
            />

        </Container>
    )
}