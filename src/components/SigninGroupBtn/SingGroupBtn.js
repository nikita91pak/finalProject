import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GoogleAuth from '../Google/GoogleAuth'
import FacebookSDK from '../FacebookSDK/FacebookSDK'
import BlueBtn from '../UI/Buttons/BlueBtn'
import GrayBtn from '../UI/Buttons/GrayButton'
import { NOOP } from '../../utilitys/utilitys'
import { useNavigation } from '@react-navigation/native';

const SingGroupBtn = ({isSingin, userInfoHandler, handleSignout, userInfo={}}) => {
    const navigation = useNavigation();
    const navigate = () => {
        const {id, name, signWith, idOrder} = userInfo
        navigation.navigate('Home',{
            id,
            name,
            signWith,
            idOrder
        })
    }
   
    const isUserSing = () => {
        if(isSingin)
        return (
        <React.Fragment>
            <BlueBtn onPress={navigate} text='Lets Start'/>
            <GrayBtn onPress={handleSignout} text='Logout'/>
        </React.Fragment>
        )

        return (
           <React.Fragment>
               <GoogleAuth userInfoHandler={userInfoHandler}/>
               <FacebookSDK userInfoHandler={userInfoHandler}/>
           </React.Fragment>
        )
    }
    return (
        <View style={styles.container}>
            {isUserSing()}
        </View>
    )
}

export default SingGroupBtn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
