import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have Ionicons installed
import { useNavigation } from 'expo-router';
import CustomDropdown from '../components/CustomDropdown';


const DropdownScreen = ({navigation}) => {

 
  const toggleDropdown = () => {
    navigation.navigate('signUp');
  };

  return (
    <View style={styles.container}>
       <View style={styles.dropdownButton}>
        <TouchableOpacity style={styles.iconWrapper} onPress={toggleDropdown}>
          <Ionicons name='arrow-back-outline' size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Asia"
          keyboardType="default"
          autoCapitalize="none"
        />
        <TouchableOpacity 
          style={styles.iconWrapper2} 
          onPress={() => navigation.navigate('dropDown')}
        >
          <Ionicons name="search-outline" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.headerText}>Competition</Text>
        <Text style={styles.text}>
        An account is needed per one host. If you already have an account for the host of competition you want to sign up, you can login and  register.
        </Text>
      </View>
      <CustomDropdown/>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:15,
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: 30,
    gap:20,
  },

  iconWrapper: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F3F3F3',
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
  },
  iconWrapper2: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  icon: {
    color: '#000',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor:'#F3F3F3',
    marginLeft: 10,
  },
  dropdownText: {
    fontSize: 18,
    marginRight: 10,
    fontFamily:'main',
    color:'#fff'
  },
  midText:{
    color:'white',
    fontFamily:'main',
    fontSize:16,
    paddingTop:5
  },
  lastText:{
    color:'white',
    fontFamily:'main',
    fontSize:12,
    paddingTop:5
  },
  dropdownContent: {
    position: 'relative',
    width: '100%',
   
    borderRadius: 20,
    backgroundColor:'#253BFF',
    height:160,
    marginTop: 10,
    overflow: 'hidden',
  },
  dropImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust how the image is resized inside the ImageBackground
  },
  content:{
    padding: 20,
    zIndex:5
  },
  imageStyle: {
   // Apply the same borderRadius as the dropdownContent
    marginTop: 40, // Adjust this value to shift the image up or down
    marginLeft: 50,
    opacity:0.3 // Adjust this value to shift the image left or right
  },
 
  headerText:{
    fontFamily:'main',
    fontSize:25,
    fontWeight:'bold',
    paddingBottom:5,
  },
  text:{
    fontFamily:'main',
    color:'#344054',
    letterSpacing:0
  },
  info:{
   paddingBottom:10,
  },
  scrollContainer:{
    paddingTop:5, 
    marginTop:10
  }
});

export default DropdownScreen;








