import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../conts/consts'
export const optionBottomTabHome = ({route})=> ({
    tabBarIcon: ({ focused, color=COLORS.blue, size=32 }) => {
    let iconName = '';
     if(route.name === 'TabHome'){
         iconName='home'
     } else if(route.name === 'Map'){
        iconName='map'
     }
      return <Icon name={iconName} size={size} color={color}/>
    }
})