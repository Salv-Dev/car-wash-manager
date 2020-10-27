import React from 'react';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

import { Container, ContainerText, TextModal, TextDesc } from './styles'; 

export default function Scheduling({ show, close }) {
    return (
        <Modal
            isVisible={show}
            onBackdropPress={close}
        >
            <Container>
                <ContainerText>
                    <AntDesign name="warning" size={34} color="#bd4040" />
                    <TextModal>Acesso negado</TextModal>
                </ContainerText>
                <TextDesc>necessário ser admin para ter acesso.</TextDesc>
            </Container>
        </Modal>
    )
}