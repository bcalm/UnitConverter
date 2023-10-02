import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/CurrencyConverterStyles';
import { convertUSDToEUR, convertEURToUSD } from '../hooks/CurrencyConverter';

function CurrencyConverterScreen() {
  const [usd, setUSD] = useState('');
  const [eur, setEUR] = useState('');

  const handleUSDChange = (text) => {
    setUSD(text);
    const convertedEUR = convertUSDToEUR(parseFloat(text));
    setEUR(convertedEUR);
  };

  const handleEURChange = (text) => {
    setEUR(text);
    const convertedUSD = convertEURToUSD(parseFloat(text));
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
          keyboardType="numeric"
          value={usd}
          onChangeText={handleUSDChange}
        />
      </View>
      <View>
        <Text style={styles.text}>EUR:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter EUR"
          keyboardType="numeric"
          value={eur}
          onChangeText={handleEURChange}
        />
      </View>
      <Button title="Clear" onPress={() => { setUSD(''); setEUR(''); }} style={styles.button} />
    </View>
  );
}

export default CurrencyConverterScreen;
