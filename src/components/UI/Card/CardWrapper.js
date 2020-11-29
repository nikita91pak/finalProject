import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../conts/consts';

//global CardWrapper component
const CardWrapper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default CardWrapper;
//styles for component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    justifyContent: 'space-around',
    height: 70,
    borderWidth: 0.5,
    margin: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
