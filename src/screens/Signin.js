import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { signout } from '../utilitys/utilitys'
import TextBold from '../components/UI/Text/TextBold'
import SingGroupBtn from '../components/SigninGroupBtn/SingGroupBtn'
import { dfltUsrImgUrl, dfltUsrname } from '../conts/consts'
const Signin = () => {
  const [user, setUser] = useState({});

  const userInfoHandler = (response, signWith) => {
    const { name, id } = response
    const avatar = response.picture?.data?.url ? 
    response.picture.data.url :
    response.photo
    console.log('signinWith.facebook',signWith)
    setUser({
      name,
      id,
      avatar,
      signWith
    })
  }

const cleanUserInfo = () => {
  setUser({})
}
  
  const handleSignout = () => {
    const {signWith} = user
    console.log('signWith',signWith)
    signout(signWith, cleanUserInfo)
 }
  const greeting = () => {
    if(user.name){
      return user.name
    }

    return dfltUsrname
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextBold >Hello, {greeting()}</TextBold>
      </View>
      <View style={styles.imageContainer}>
         <Image 
         resizeMode='contain' 
         style={styles.image} 
         source={{uri: user.avatar? user.avatar : dfltUsrImgUrl}}/>
      </View>
      <View style={styles.socialBtnConainer}>
           <SingGroupBtn
           handleSignout={handleSignout} 
           userInfoHandler={userInfoHandler} 
           isSingin={user.id ? true : false} />
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 8
    },
    imageContainer: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black'
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 150
    },
    textContainer : {
       flex: 0,
       justifyContent: 'center' 
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: "600"
    },
    socialBtnConainer: {
        flex: 0.3,
        alignItems: "center",
    }
});
