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
export const getHandle = async (path='/holon.json') => new Promise(async (resolve) => {
  const response = await instance.get(path)
  resolve(response.data)
});

// Handle to method PUT - for update the a data base in firebase
export const putHandle = (path, body) => new Promise(async (resolve) => {
    const response = await instance.put(path, body)
    resolve(response.data)
  
})

// Handle to method POST - for add the a new data base in firebase
export const postHandle = (path, body) => new Promise(async (resolve) => {
  const response = await instance.post(path, body)
  resolve(response.data)

})

// Handle to method DELETE - for Delete data from data base firebase
export const deleteHandle = async (path) => new Promise(async (resolve) => {
  const response = await instance.delete(path)
  resolve(response.data)
});

// find index of item in arr - Generic Function. 
export const findIndex = (arr, propety, value) => arr.findIndex(item => item[propety] === value)

//check if costumer have order , this checking opertion happen in login
export const handleExistOrders =  (idCostumer, name) => new Promise( async (reslove,reject) => {
   const response = await instance.get(`/${name}/orders.json`)
   if(response.data){
     console.log('handleExistOrders', response.data);
    const keys = Object.keys(response.data)
    const order = keys.find(val => {
      if(response.data[val].idCostumer === idCostumer && name===response.data[val].nameParking){
        console.log('order -->', val);
        return val
      }
   })
   reslove({idOrder:order,...response.data[order]})
  } else {
    reject({message: 'nothing'})
  }
   
})