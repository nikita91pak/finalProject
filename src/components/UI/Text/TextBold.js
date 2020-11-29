import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FONTS } from '../../../conts/consts'

//global text application - regular text
const TextBold = ({children, color='black', textAlign='center', fontSize=26}) => (
<Text style={[styles.regularText, {color, textAlign, fontSize}]}>{children}</Text>
)
      
   

export default TextBold
//style text
const styles = StyleSheet.create({
    regularText: {
        fontFamily: FONTS.bold,
        fontWeight: '800'
    }
})