import {Platform} from 'react-native';
import {signinWith, APIS} from '../conts/consts';
import {LoginManager} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import axios from 'axios';

//initail API instance , connect to database firebase .
const instance = axios.create({
  baseURL: APIS.firebasedb,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
  },
});

//get info on wich OS the app is working 
export const OS = Platform.OS === 'ios' ? 'ios' : 'android';

export const NOOP = () => {};
//singout from google/facebook
export const signout = async (typeSingout, cb) => {
  switch (typeSingout) {
    case signinWith.facebook:
      LoginManager.logOut();
      cb && cb(); // if cb is not undefind then exe the func 
      break;
    case signinWith.google:
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        cb && cb();  // if cb is not undefind then exe the func 
      } catch (error) {
        console.error(error);
      }
      break;
    default:
      return;
  }
};
// Handle to method GET - for fecth data from data base firebase
export const getHandle = async () => new Promise(async (resolve) => {
  const response = await instance.get('/holon.json')
  resolve(response.data)
});

// Handle to method PUT - for update data from data base firebase
export const putHandle = (path, body) => new Promise(async (resolve) => {
    const response = await instance.put(path, body)
    resolve(response.data)
  
})
// find index of item in arr - Generic Function. 
export const findIndex = (arr, propety, value) => arr.findIndex(item => item[propety] === value)
