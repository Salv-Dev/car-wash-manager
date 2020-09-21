import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo } from '@expo/vector-icons';

import SchedulingList from './../../screens/SchedulingList';
import CompletedList from './../../screens/CompletedList';

import { MenuApp, BtnMenu, TitleApp } from './styles.js';

const Tab = createMaterialTopTabNavigator();

export default function TabNav({ navigation }) {
    return (
        <>
            <MenuApp>
                <BtnMenu onPress={() => navigation.openDrawer()}>
                    <Entypo name="menu" size={26} color="#fff" />
                </BtnMenu>
                <TitleApp>Car-wash Manager</TitleApp>
            </MenuApp>
            <Tab.Navigator
                initialRouteName={SchedulingList}
                tabBarOptions={{
                    activeTintColor: "white",
                    indicatorStyle: { backgroundColor: '#1cade8' },
                    style: { backgroundColor: '#141b2b' }
                }}
            >
                <Tab.Screen name="Agendamentos" component={SchedulingList} />
                <Tab.Screen name="Concluídos" component={CompletedList} />
            </Tab.Navigator>
        </>
    )
}