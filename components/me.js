import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Me = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is Gleb Kimosov!!!</Text>
      
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
  text: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default Me;