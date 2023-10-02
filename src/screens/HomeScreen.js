import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/HomeScreenStyles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Unit Converter</Text>
      <Button
        title="Unit Converter"
        onPress={() => navigation.navigate('UnitConverter')}
      />
      <Button
        title="Currency Converter"
        onPress={() => navigation.navigate('CurrencyConverter')}
      />
    </View>
  );
}

export default HomeScreen;
