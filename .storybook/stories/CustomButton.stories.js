// CustomButton.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CustomButton from '../../components/CustomButton';
import { View } from 'react-native';

storiesOf('CustomButton', module)
  .addDecorator(story => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{story()}</View>)
  .add('default', () => (
    <CustomButton
      onPress={action('button-pressed')}
      leftIcon="log-in-outline"
      rightIcon="arrow-forward-outline"
      text="Sign Up For Free"
    />
  ))
  .add('no icons', () => (
    <CustomButton
      onPress={action('button-pressed')}
      text="Sign Up For Free"
    />
  ))
  .add('only left icon', () => (
    <CustomButton
      onPress={action('button-pressed')}
      leftIcon="log-in-outline"
      text="Sign Up For Free"
    />
  ))
  .add('only right icon', () => (
    <CustomButton
      onPress={action('button-pressed')}
      rightIcon="arrow-forward-outline"
      text="Sign Up For Free"
    />
  ));
