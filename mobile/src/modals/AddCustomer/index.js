import React, { useState } from 'react';
import Modal from 'react-native-modal';

import { Container, TitleForm, ClientInput, TitleInput, Input, PhoneInput, SendButton, TextButton } from './styles'; 

export default function Scheduling({ show, close }) {

    return (
        <Modal
            isVisible={show}
            onBackdropPress={close}
        >
            <Container>
                <TitleForm>Cadastrar cliente</TitleForm>
                <ClientInput>
                    <TitleInput>Nome</TitleInput>
                    <Input />
                </ClientInput>
                <PhoneInput>
                    <TitleInput>Telefone</TitleInput>
                    <Input />
                </PhoneInput>
                <SendButton onPress={() => {}}>
                    <TextButton>Cadastrar</TextButton>
                </SendButton>
            </Container>
        </Modal>
    )
}