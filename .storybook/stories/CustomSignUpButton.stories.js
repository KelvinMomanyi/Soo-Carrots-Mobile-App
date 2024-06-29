// import CustomSignUpButton from './CustomSignUpButton';
import CustomSignUpButton from '../../components/CustomSignUpButton'
// Story 1: Sign Up Button
storiesOf('CustomSignUpButton', module).add('Sign Up Button', () => (
  <CustomSignUpButton
    title="Sign Up"
    onPress={handleSignUp} 
  />
));

export {};

