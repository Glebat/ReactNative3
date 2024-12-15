import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Me from './components/me'; // Обновлён путь
import Lang from './components/Lang'; // Обновлён путь

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={Me} />
        <Tab.Screen name=" Мoй язык Программирования" component={Lang} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}