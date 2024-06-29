// CustomEmailButton.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CustomEmailButton from '../../components/CustomEmailButton';
import { View } from 'react-native';

storiesOf('CustomEmailButton', module)
  .addDecorator(story => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{story()}</View>)
  .add('default', () => (
    <CustomEmailButton
      onPress={action('button-pressed')}
      leftIcon="mail-outline"
      rightIcon="arrow-forward-outline"
      text="Continue with Email"
    />
  ))
  .add('no icons', () => (
    <CustomEmailButton
      onPress={action('button-pressed')}
      text="Continue with Email"
    />
  ))
  .add('only left icon', () => (
    <CustomEmailButton
      onPress={action('button-pressed')}
      leftIcon="mail-outline"
      text="Continue with Email"
    />
  ))
  .add('only right icon', () => (
    <CustomEmailButton
      onPress={action('button-pressed')}
      rightIcon="arrow-forward-outline"
      text="Continue with Email"
    />
  ));
