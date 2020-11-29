import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FONTS } from '../../../conts/consts'

//global text application - bold text
const TextRegular = ({children, color='black', fontSize=22 , textAlign='center'}) => (
<Text style={[styles.regularText, {color, fontSize, textAlign}]}>{children}</Text>
)
      
   

export default TextRegular
//style text 
const styles = StyleSheet.create({
    regularText: {
        fontFamily: FONTS.regular,
    }
})
