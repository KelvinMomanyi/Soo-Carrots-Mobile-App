import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton';
import CustomEmailButton from '../components/CustomEmailButton';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
       <ImageBackground
      source={require('../assets/images/hero.png')}
      style={styles.reactLogo}
    />
    <View style={styles.headerArea}>
      <Text style={styles.headerTitle}>
        Soo
      </Text>
      <Text style={styles.headerTitle}>
       and Carrots
      </Text>
    </View>
    <View style={styles.bodyArea}>
    <ImageBackground
      source={require('../assets/images/blackGradient.png')}
      style={styles.reactLogo}
    />
    </View>  
    <View style={styles.buttons}>
      <View style={styles.buttonContainer}>
        <CustomButton
        onPress={() => navigation.navigate('signUp')}
        leftIcon="log-in-outline"
        rightIcon="arrow-forward-outline"
        text="Sign Up For Free"
       />
       <CustomEmailButton
        onPress={() => navigation.navigate('signUp')}
        leftIcon="mail-outline"
        rightIcon="arrow-forward-outline"
        text="Continue with Email"
      />
    </View>
    </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerArea:{
      width:'100%',
      height:'60%',
      display:'flex',
      paddingTop:90,
      paddingLeft:20
  
    },

    headerTitle:{
      fontFamily:'main',
      fontWeight:'bold',
      color:'#fff',
      fontSize:40
    },
    buttons: {
      position: 'absolute',
      bottom: 100, 
      width: '100%',
    },

   
    buttonContainer:{
     width:'100%',
     display:'flex',
     justifyContent: 'center',
     alignItems: 'center',
     
    },

    bodyArea:{
      position: 'absolute',
      bottom:0, 
      width: '100%',
      height: 450, 
     
    },
    reactLogo: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  });
  

export default Home