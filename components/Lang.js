import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Lang = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tex}>Мой язык:</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.text}>JavaScript</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a7c957',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  },
  tex: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
  },
});

export default Lang;