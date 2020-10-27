import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';

import { Header, ContainerMenu, BtnMenu, TextBtn } from './styles';

import TabNav from './components/TabNav';
import CustomerList from './screens/CustomerList';
import About from './screens/About';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ navigation }) => {
    return (
        <>
            <Header>
                <FontAwesome name="user-circle-o" size={140} color="#fff" />
            </Header>
            <ContainerMenu>
                <BtnMenu onPress={() => navigation.navigate('Agenda')} >
                    <MaterialIcons name="schedule" size={18} color="#707070" style={{ width: 40,}} />
                    <TextBtn>Agenda</TextBtn>
                </BtnMenu>
                <BtnMenu onPress={() => navigation.navigate('Clientes')}>
                    <AntDesign name="contacts" size={18} color="#707070" style={{ width: 40,}} />
                    <TextBtn>Clientes</TextBtn>
                </BtnMenu>
                <BtnMenu onPress={() => navigation.navigate('Sobre')}>
                    <Ionicons name="md-information-circle-outline" size={19} color="#707070" style={{ width: 40,}} />
                    <TextBtn>Sobre</TextBtn>
                </BtnMenu>
            </ContainerMenu>
        </>
    )
}

export default function Main() {
    return (
        <>
            <StatusBar 
                barStyle="white-content"
                backgroundColor="transparent"
                translucent
            />
            <NavigationContainer>
                <Drawer.Navigator
                    drawerStyle={{
                        backgroundColor: "#ccc"
                    }}
                    drawerContent={(props) => <CustomDrawer {...props}/>}
                    drawerContentOptions={{
                        activeTintColor: "#1cade8",
                        inactiveTintColor: "#8a8a8a"
                    }}
                    hideStatusBar={true}
                >
                    <Drawer.Screen name="Agenda" component={TabNav} />
                    <Drawer.Screen name="Clientes" component={CustomerList} />
                    <Drawer.Screen name="Sobre" component={About} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}