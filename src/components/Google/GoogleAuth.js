import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
import { signinWith } from '../../conts/consts'
import React, {useState, useEffect} from 'react';

export default ({userInfoHandler}) => {

    useEffect(() => {
        GoogleSignin.configure({});
      }, [])

      const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          userInfoHandler(userInfo.user, signinWith.google)
        } catch (error) {
          console.log('Message', error.message);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');
          } else {
            console.log('Some Other Error Happened');
          }
        }
      };

  return (
    <GoogleSigninButton 
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={signIn}
  />
  );
};
