import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { Container, TitleForm, ContainerBtn, BtnCheck, BtnDelete, TitleDelete } from './styles'; 

export default function Scheduling({ show, close }) {

    return (
        <Modal
            isVisible={show}
            onBackdropPress={close}
        >
            <Container>
                <ContainerBtn>
                    <TitleForm>Concluir Serviço?</TitleForm>
                    <BtnCheck>
                        <AntDesign name="checkcircleo" size={22} color="#fff" />
                    </BtnCheck>
                </ContainerBtn>
                <BtnDelete>
                    <MaterialIcons name="delete" size={18} color="#bd4040"/>
                    <TitleDelete>Excluir serviço</TitleDelete>
                </BtnDelete>
            </Container>
        </Modal>
    )
}