import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {COLORS} from '../../../conts/consts';
import TextRegular from '../Text/TextRegular'
const BlueBtn = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextRegular color={COLORS.black}>{text}</TextRegular>
    </TouchableOpacity>
  );
};

export default BlueBtn;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    minWidth: 150,
    minHeight: 48,
    borderRadius: 5,
    borderColor: COLORS.black,
    borderWidth: .5,
   backgroundColor: 'transparent'
  },
});
