import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View,Text, TouchableOpacity, TextInput,Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from 'expo-router';
import DropdownScreen from './DropDown';
import CustomSignUpButton from '../components/CustomSignUpButton';


export default function SignUp({navigation}) {
  
  const [competition, setCompetition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const [errors, setErrors] = useState({
    competition: '',
    email: '',
    emailFormat: '',
    password: '',
    confirmPassword: '',
    passwordMatch: '',
    specialChars: '',
    characterRequirements: '',
    lengthRequirement: '',
    firstName: '',
    lastName: '',
    termsAgreement: '',
  });

  const handleSignUp = () => {
    // Reset previous errors
    setErrors({
      competition: '',
      email: '',
      emailFormat: '',
      password: '',
      confirmPassword: '',
      passwordMatch: '',
      specialChars: '',
      characterRequirements: '',
      lengthRequirement: '',
      firstName: '',
      lastName: '',
      termsAgreement: '',
    });

    // Validation logic
    let formIsValid = true;
    const newErrors = { ...errors };

    if (!competition) {
      newErrors.competition = 'You must pick a competition to register';
      formIsValid = false;
    }
    if (!email) {
      newErrors.email = 'Please enter your email.';
      formIsValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.emailFormat = 'Email format is invalid.';
      formIsValid = false;
    }
    if (!password) {
      newErrors.password = 'Please enter your password.';
      formIsValid = false;
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
      formIsValid = false;
    }


    // Rule 1: New password and Confirm password do not match
    if (password !== confirmPassword) {
      newErrors.passwordMatch = 'New password and Confirm password do not match.';
      formIsValid = false;
    }

    // Rule 2: Special characters are limited to (~`!@#$%^&*()_-+=?)
    const specialRegex =/[~`!@#$%^&*()_\-+=?]+/;
    if (!specialRegex.test(password)) {
      newErrors.specialChars = 'Special characters are limited to (~`!@#$%^&*()_-+=?).';
      formIsValid = false;
    }

    // Rule 3: Include at least 3 uppercase letters, lowercase letters, numbers, or special characters
    const uppercaseRegex = /[A-Z]/g;
    const lowercaseRegex = /[a-z]/g;
    const numberRegex = /[0-9]/g;
    const specialCount = password.match(/[~`!@#$%^&*()_\-\+=?]/g)?.length || 0;

    if (
      !(password.match(uppercaseRegex)?.length >= 3) &&
      !(password.match(lowercaseRegex)?.length >= 3) &&
      !(password.match(numberRegex)?.length >= 3) &&
      !(specialCount >= 3)
    ) {
      newErrors.characterRequirements = 'Include at least 3 uppercase letters, lowercase letters, numbers, or special characters.';
      formIsValid = false;
    }

    // Rule 4: At least 8 characters
    if (password.length < 8) {
      newErrors.lengthRequirement = 'At least 8 letters';
      formIsValid = false;
    }
    if (!firstName) {
      newErrors.firstName = 'Please enter your first name in English.';
      formIsValid = false;
    }
    if (!lastName) {
      newErrors.lastName = 'Please enter your last name in English.';
      formIsValid = false;
    }


    if (!checked) {
      newErrors.termsAgreement = 'Please agree to the Terms & Conditions and Privacy Policy.';
      formIsValid = false;
    }
    if (!formIsValid) {
      // Set errors
      setErrors(newErrors);
    } else {
      // All fields are valid, proceed with signup logic
      navigation.navigate('modal')
      // Example: Navigate to next screen or submit form data
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <View style={styles.iconRing}>
           <Ionicons name='arrow-back-outline' style={styles.icon} size={20} onPress={() => navigation.navigate('Home')}/>
        </View>
        <Text style={styles.backTitle}>Create Account</Text>
      </View>
      <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
      <TextInput
          style={styles.input}
          placeholder="Competition to sign up"
          placeholderTextColor='#667085'
          value={competition}
          onChangeText={setCompetition}
          keyboardType="default"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.navigate('dropDown')}
        >
          <Ionicons name="chevron-down-outline" size={20} style={styles.icon} />
        </TouchableOpacity>
        {errors.competition ? <Text style={styles.errorText}>{errors.competition}</Text> : null}
      </View>
      {/* Email Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor='#667085'
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {/* {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null} */}
        {errors.emailFormat ? <Text style={styles.errorText}>{errors.emailFormat}</Text> : null}
      </View>
      {/* Password Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor='#667085'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
        />
        {/* Password reveal toggle button */}
        <TouchableOpacity
          style={styles.eyeIcon1}
          onPress={togglePasswordVisibility}
        >
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {/* Confirm Password Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor='#667085'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword1}
        />
        <TouchableOpacity
          style={styles.eyeIcon1}
          onPress={togglePasswordVisibility1}
        >
          <Ionicons
            name={showPassword1 ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>  
          {errors.lengthRequirement ? <Text style={styles.errorText}><Ionicons color='red' name='checkmark-outline'/>{errors.lengthRequirement}</Text> : null}
        {errors.characterRequirements ? <Text style={styles.errorText}><Ionicons color='red' name='checkmark-outline'/>{errors.characterRequirements}</Text> : null}
        {errors.specialChars ? <Text style={styles.errorText}>{errors.specialChars}</Text> : null}
        {errors.passwordMatch ? <Text style={styles.errorText}>{errors.passwordMatch}</Text> : null}
        
       
      </View>
      {/* First Name Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="First Name in English"
          placeholderTextColor='#667085'
          value={firstName}
          onChangeText={setFirstName}
        />
        {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}
      </View>
      {/* Last Name Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Last Name in English"
          placeholderTextColor='#667085'
          value={lastName}
          onChangeText={setLastName}
        />
        {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}
      </View>
      {/* Submit Button */}
      <View style={styles.checkboxWrapper}>
        <Pressable
         style={[styles.checkboxBase, checked && styles.checkboxChecked]}
         onPress={() => setChecked(!checked)}>
          {checked && <Ionicons name="checkmark" size={24} color="white" />}
        </Pressable>
        <Text style={styles.checkboxLabel}>
          By signing up, I agree to Cloit's&nbsp;
          <Text style={styles.linkText}>Terms & Conditions</Text>&nbsp;
          and&nbsp;
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
        
      </View>
      {errors.termsAgreement ? <Text style={styles.errorText1}>{errors.termsAgreement}</Text> : null}
      <CustomSignUpButton title="Sign Up" onPress={handleSignUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:60,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
  },
  inputContainer:{
    marginTop:30,
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  icon: {
    color: '#000',
    zIndex:10
  },
  iconRing: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputWrapper1: {
    position: 'relative', // Ensure eye icon overlaps input
    marginBottom: 20,
  
  },
  input1: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 40,
     // Space for eye icon
    marginBottom: 5,
  },
  eyeIcon1: {
    position: 'absolute',
    top: 10, // Adjust vertically to center with input
    right: 10, // Adjust horizontally to align with end of input
  },


  backBtn:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   gap:15,
  },
  backTitle:{
   fontFamily:'main',
   fontSize:32,
   fontWeight:'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily:'main',
    backgroundColor:'#F3F3F3',
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:40,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily:'main'
  },
  errorText: {
    color: 'red',
    fontFamily:'main',
    marginBottom: 10,
  },
  errorText1: {
    color: 'red',
    fontFamily:'main',
    fontSize:10
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '300',
    fontSize: 13,
    fontFamily:'main'
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ' black',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'blue',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },

});
