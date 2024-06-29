// CustomEmailButton.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomEmailButton = ({ onPress, leftIcon, rightIcon, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <View style={styles.leftContent}>
          {leftIcon && <Ionicons name={leftIcon} size={25} style={styles.icon} />}
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.iconRing}>
           {rightIcon && <Ionicons name={rightIcon} size={25} style={styles.icon} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1D2939',
    width: '80%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:15,
  },
  icon: {
    color:'white'
  },
  iconRing: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomEmailButton;
