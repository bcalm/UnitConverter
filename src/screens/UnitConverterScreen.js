import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/UnitConverterStyles';
import { convertKilometersToMiles, convertMilesToKilometers } from '../hooks/UnitConverter';

function UnitConverterScreen() {
  const [kilometers, setKilometers] = useState('');
  const [miles, setMiles] = useState('');

  const handleKilometersChange = (text) => {
    setKilometers(text);
    const convertedMiles = convertKilometersToMiles(parseFloat(text));
    setMiles(convertedMiles);
  };

  const handleMilesChange = (text) => {
    setMiles(text);
    const convertedKilometers = convertMilesToKilometers(parseFloat(text));
    setKilometers(convertedKilometers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unit Converter</Text>
      <View>
        <Text style={styles.text}>Kilometers:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter kilometers"
          keyboardType="numeric"
          value={kilometers}
          placeholderTextColor="black"
          onChangeText={handleKilometersChange}
        />
      </View>
      <View>
        <Text style={styles.text}>Miles:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter miles"
          keyboardType="numeric"
          placeholderTextColor="black"
          value={miles}
          onChangeText={handleMilesChange}
        />
      </View>
      <Button title="Clear" onPress={() => { setKilometers(''); setMiles(''); }} style={styles.button} />
    </View>
  );
}

export default UnitConverterScreen;
