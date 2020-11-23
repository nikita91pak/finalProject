import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextRegular from '../Text/TextRegular'
import { COLORS } from '../../../conts/consts'

const TitleWithBackground = ({children}) => {
    return (
        <View style={styles.container}>
            <TextRegular fontSize={20} color={COLORS.black} textAlign="left">{children}</TextRegular>
        </View>
    )
}

export default TitleWithBackground

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcdde1',
        height: 37,
        padding: 5,
        borderRadius: 4
    }
})
