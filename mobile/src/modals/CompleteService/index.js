import React from 'react';
import Modal from 'react-native-modal';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import api from './../../services/api';

import { Container, TitleForm, ContainerBtn, BtnCheck, BtnDelete, TitleDelete } from './styles'; 

export default function Scheduling({ show, close, content }) {
    return (
        <Modal
            isVisible={show}
            onBackdropPress={close}
        >
            <Container>
                <ContainerBtn>
                    <TitleForm>Concluir Serviço?</TitleForm>
                    <BtnCheck onPress={() => {
                        api.post('completed', content);
                        close();
                        api.delete(`schedule/${content.id}`);
                    }}
                    >
                        <AntDesign name="checkcircleo" size={22} color="#fff" />
                    </BtnCheck>
                </ContainerBtn>
                <BtnDelete onPress={() => {
                    close();
                    api.delete(`schedule/${content.id}`);
                }}>
                    <MaterialIcons name="delete" size={18} color="#bd4040"/>
                    <TitleDelete>Excluir serviço</TitleDelete>
                </BtnDelete>
            </Container>
        </Modal>
    )
}