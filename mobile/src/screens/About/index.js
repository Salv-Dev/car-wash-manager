import React from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import { Container, Copyright, MenuApp, BtnMenu, TitleApp } from './styles';

export default function About({ navigation }) {
    return (
        <>
            <MenuApp>
                <BtnMenu onPress={() => navigation.openDrawer()}>
                    <Entypo name="menu" size={26} color="#fff" />
                </BtnMenu>
                <TitleApp>Car-wash Manager</TitleApp>
            </MenuApp>
            <Container>
                <Copyright>
                    2020 salv-dev
                </Copyright>
            </Container>
        </>
    )
}