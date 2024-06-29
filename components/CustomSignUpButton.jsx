import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomSignUpButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#253BFF',
    width: '100%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'main',
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomSignUpButton;
