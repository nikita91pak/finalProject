import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { signinWith } from '../../conts/consts'
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import { handleExistOrders } from '../../utilitys/utilitys'
const FacebookSDK = ({userInfoHandler}) => {
  const [userInfo, setUserInfo] = useState({});

  const getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name, picture.type(large)'
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          handleExistOrders(result.id).then(res => {
            if(res){
              userInfoHandler({...result, order: res}, signinWith.facebook)
            }
            
          }).catch(err => userInfoHandler(result, signinWith.facebook))
          
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
  return (
    <View style={styles.conatiner}>
      <LoginButton
      style={styles.conatiner}
        onLoginFinished={(error, result) => {
       
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              const accessToken = data.accessToken.toString();
              getInfoFromToken(accessToken);
            });
          }

        }}
        onLogoutFinished={() => setUserInfo({userInfo: {}})}
      />
    </View>
  );
};

export default FacebookSDK;

const styles = StyleSheet.create({
  conatiner: {
    width: 187,
    height: 38,
    marginTop: 5
  },
});
