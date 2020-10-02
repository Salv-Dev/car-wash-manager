import React from 'react';
import { FlatList } from 'react-native';
import Customer from './../../components/Customer';

import { Container } from './styles';

export default function CompletedList() {

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