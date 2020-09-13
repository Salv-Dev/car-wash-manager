import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SchedulingList from './screens/SchedulingList';
import CustomerList from './screens/CustomerList';

import { TitleApp } from './styles.js';

const Tab = createMaterialTopTabNavigator();

export default function Main() {
    return (
        <>
            <StatusBar 
                barStyle="white-content"
                backgroundColor="transparent"
                translucent
            />
            <NavigationContainer>
                <TitleApp>Car Wash Manager</TitleApp>
                <Tab.Navigator
                    initialRouteName={SchedulingList}
                    tabBarOptions={{
                        activeTintColor: "white",
                        indicatorStyle: { backgroundColor: '#1cade8' },
                        style: { backgroundColor: '#141b2b' }
                    }}
                >
                    <Tab.Screen name="Agendamentos" component={SchedulingList} />
                    <Tab.Screen name="Clientes" component={CustomerList} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}