import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {COLORS} from '../../../conts/consts';
const CardWrapper = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default CardWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        justifyContent: 'space-around',
        height: 70,
        borderWidth: .5,
        margin: 5,
        padding: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 5,
        borderRadius: 5,
      }
})
