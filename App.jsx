
import Constants from "expo-constants";
import { Image, StyleSheet,View, ImageBackground, Platform, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useNavigation } from 'expo-router';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './pages/Home'
import SignUp from "./pages/SignUp";
import DropdownScreen from "./pages/DropDown";
import ModalScreen from "./pages/MainModal";
import { useFonts } from 'expo-font';
const Stak =  createNativeStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    'mai': require('./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });
  return(
    <NavigationContainer>
      <Stak.Navigator>
        <Stak.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stak.Screen name="signUp" component={SignUp} options={{headerShown:false}} />
        <Stak.Screen name="dropDown" component={DropdownScreen} options={{headerShown:false}} />
        <Stak.Screen name="modal" component={ModalScreen} options={{headerShown:false}} />
      </Stak.Navigator>
    </NavigationContainer>
  )
  // return (
  //   <View style={styles.container}>
    
  //   <View style={styles.headerArea}>
  //     <Text style={styles.headerTitle}>
  //       Soo
  //     </Text>
  //     <Text style={styles.headerTitle}>
  //      and Carrots
  //     </Text>
  //   </View>
  //   <View style={styles.bodyArea}>
  //   </View>  
  //   <View style={styles.buttons}>
  //     <View style={styles.buttonContainer}>
  //     <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('signUp')}>
  //       <Text style={styles.buttonText}>
  //         <Ionicons name='log-in-outline' size={25}/>
  //          Sign Up For Free
  //          <Ionicons name='arrow-forward-circle-outline' size={45}/>
  //       </Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity  style={styles.button2} onPress={() => navigation.navigate('signUp')}>
  //          <Text style={styles.buttonText}>
  //               <Ionicons name="mail-outline" size={25}/>
  //                Continue with Email
  //               <Ionicons name='arrow-forward-circle-outline' size={45}/>
  //             </Text>
  //       </TouchableOpacity>
      
  //   </View>
  //   </View>
  //   </View>
  //   )
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "false") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerArea:{
    width:'100%',
    height:'60%',
    display:'flex',
    justifyContent:'start',
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
    bottom: 100, // Adjust this value to set the distance from the bottom
    width: '100%',
    
   
     
  },
  button1:{
    backgroundColor: '#253BFF',
    width: '80%', // Example width
    height: 50, // Example height
    borderRadius: 20,
    display:'flex',
   justifyContent:"center",
    alignItems:'center',

  },
  button2:{
    backgroundColor: '#1D2939',
    width: '80%', // Example width
    height: 50, // Example height
    borderRadius: 20,
    
  },
  buttonText:{
    fontFamily:'main',
    color: '#fff',
  },
  buttonContainer:{
   width:'100%',
   display:'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap:20
  },
  bodyArea:{
    position: 'absolute',
    bottom:0, // Adjust this value to set the distance from the bottom
    width: '100%',
    height: 240, // Example height
    backgroundColor: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default AppEntryPoint;
