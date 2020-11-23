import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../../../conts/consts';
import TextRegular from '../Text/TextRegular'
const BlueBtn = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextRegular color={COLORS.white}>{text}</TextRegular>
    </TouchableOpacity>
  );
};

export default BlueBtn;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    minWidth: 192,
    minHeight: 48,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
  },
});
