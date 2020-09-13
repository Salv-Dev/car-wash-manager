import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

import { Container, TitleForm, ContainerBtn, BtnCheck, BtnClose } from './styles'; 

export default function Scheduling({ show, close }) {

    return (
        <Modal
            isVisible={show}
            onBackdropPress={close}
        >
            <Container>
                <TitleForm>Concluir Serviço?</TitleForm>
                <ContainerBtn>
                    <BtnCheck>
                        <AntDesign name="check" size={18} color="#fff" />
                    </BtnCheck>
                    <BtnClose>
                        <AntDesign name="close" size={18} color="#fff" />
                    </BtnClose>
                </ContainerBtn>
            </Container>
        </Modal>
    )
}