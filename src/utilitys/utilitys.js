import {Platform} from 'react-native';
import {signinWith, APIS} from '../conts/consts';
import {LoginManager} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import axios from 'axios';

const instance = axios.create({
  baseURL: APIS.firebasedb,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const OS = Platform.OS === 'ios' ? 'ios' : 'android';

export const NOOP = () => {};
//singout from google/facebook
export const signout = async (typeSingout, cb) => {
  switch (typeSingout) {
    case signinWith.facebook:
      LoginManager.logOut();
      cb();
      break;
    case signinWith.google:
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        cb();
      } catch (error) {
        console.error(error);
      }
      break;
    default:
      return;
  }
};

export const getHandle = async () => new Promise(async (resolve) => {
  const response = await instance.get('/holon.json')
  resolve(response.data)
});


export const putHandle = (path, body) => new Promise(async (resolve) => {
    await instance.put(path, body)
  
})

export const findIndex = (arr, propety, value) => arr.findIndex(item => item[propety] === value)
