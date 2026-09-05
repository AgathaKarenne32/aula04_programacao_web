import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Arte from './AppArte';
import Compras from './AppCompras';
import CalculadoraJuros from './CalculadoraJuros';
import Dado from './Dado';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen
          name="Arte"
          component={Arte}
        />

        <Tab.Screen
          name="Juros"
          component={CalculadoraJuros}
        />

        <Tab.Screen
          name="Dado"
          component={Dado}
        />

        <Tab.Screen
          name="Compras"
          component={Compras}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}