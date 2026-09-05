import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './Dashboard';
import Linhas from './Linhas';
import DetalhesLinha from './DetalhesLinha';
import Analises from './Analises';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Linhas"
        component={Linhas}
      />

      <Stack.Screen
        name="Detalhes"
        component={DetalhesLinha}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
        />

        <Tab.Screen
          name="Linhas"
          component={ListaStack}
        />

        <Tab.Screen
          name="Análises"
          component={Analises}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}