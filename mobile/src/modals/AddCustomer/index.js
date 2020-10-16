import React, { useState } from 'react';
import Modal from 'react-native-modal';
import api from './../../services/api';

import { Container, TitleForm, ClientInput, TitleInput, Input, PhoneInput, SendButton, TextButton } from './styles'; 

export default function Scheduling({ show, close }) {
    const [inputName, setInputName] = useState();
    const [inputPhone, setInputPhone] =  useState();

    const submitClient = () => {
        const client = {
            name: inputName,
            phone: inputPhone
        }

        api.post('client', client);
        close();
    }

    return (
        <Modal
            isVisible={show}
            onBackdropPress={close}
        >
            <Container>
                <TitleForm>Cadastrar cliente</TitleForm>
                <ClientInput>
                    <TitleInput>Nome</TitleInput>
                    <Input
                        autoFocus={true} 
                        onChangeText={text => setInputName(text)}
                    />
                </ClientInput>
                <PhoneInput>
                    <TitleInput>Telefone</TitleInput>
                    <Input onChangeText={text => setInputPhone(text)}/>
                </PhoneInput>
                <SendButton onPress={submitClient}>
                    <TextButton>Cadastrar</TextButton>
                </SendButton>
            </Container>
        </Modal>
    )
}