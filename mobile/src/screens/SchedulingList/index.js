import React from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Entypo } from '@expo/vector-icons';

import Schedule from './../../components/Schedule';

import { Container, TitleScreen } from './styles';

export default function SchedulingList() {
    return (
        <Container>
            <TitleScreen>Agendamentos</TitleScreen>

            <ActionButton buttonColor="#1cade8">
                <ActionButton.Item buttonColor='#1cade8' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Entypo name="plus" size={24} color="#fff" />
                </ActionButton.Item>
            </ActionButton>

            <FlatList
                showsVerticalScrollIndicator={false}
                data = { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
                initialNumToRender={10}
                renderItem = { ({ item }) => <Schedule /> }
                keyExtractor={(item, index) => index.toString()}
            />
                
        </Container>
    )
}