import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UnitConverterScreen from './screens/UnitConverterScreen';
import CurrencyConverterScreen from './screens/CurrencyConverterScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UnitConverter" component={UnitConverterScreen} />
        <Stack.Screen name="CurrencyConverter" component={CurrencyConverterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
