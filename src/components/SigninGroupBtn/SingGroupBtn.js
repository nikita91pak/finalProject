import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GoogleAuth from '../Google/GoogleAuth'
import FacebookSDK from '../FacebookSDK/FacebookSDK'
import BlueBtn from '../UI/Buttons/BlueBtn'
import GrayBtn from '../UI/Buttons/GrayButton'
import { NOOP } from '../../utilitys/utilitys'
const SingGroupBtn = ({isSingin, userInfoHandler, handleSignout}) => {

    const isUserSing = () => {
        if(isSingin)
        return (
        <React.Fragment>
            <BlueBtn onPress={NOOP} text='Lets Start'/>
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
