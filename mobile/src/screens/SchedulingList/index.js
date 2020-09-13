import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

import Schedule from './../../components/Schedule';
import ModalSchedule from './../../modals/AddSchedule';

import { Container } from './styles';

export default function SchedulingList() {
    const [modal, setModal] = useState(false);

    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                data = { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
                initialNumToRender={10}
                renderItem = { ({ item }) => <Schedule /> }
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