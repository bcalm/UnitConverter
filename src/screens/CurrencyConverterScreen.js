import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/CurrencyConverterStyles';
import { convertUSDToINR, convertINRToUSD } from '../hooks/CurrencyConverter';

function CurrencyConverterScreen() {
  const [usd, setUSD] = useState('');
  const [inr, setINR] = useState('');

  const handleUSDChange = (text) => {
    setUSD(text);
    const convertedINR = convertUSDToINR(parseFloat(text));
    setINR(convertedINR);
  };

  const handleINRChange = (text) => {
    setINR(text);
    const convertedUSD = convertINRToUSD(parseFloat(text));
    setUSD(convertedUSD);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Currency Converter</Text>
      <View>
        <Text style={styles.text}>USD:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter USD"
          placeholderTextColor="black"
          keyboardType="numeric"
          value={usd}
          onChangeText={handleUSDChange}
        />
      </View>
      <View>
        <Text style={styles.text}>INR:</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="Enter INR"
          keyboardType="numeric"
          value={inr}
          onChangeText={handleINRChange}
        />
      </View>
      <Button title="Clear" onPress={() => { setUSD(''); setINR(''); }} style={styles.button} />
    </View>
  );
}

export default CurrencyConverterScreen;
