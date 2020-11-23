import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../../../conts/consts';
import {OS} from '../../../utilitys/utilitys';
const BlueBtn = ({onPress, text}) => {
  if (OS === 'android') {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(COLORS.lightGray, false)}  
        onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
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
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    marginTop: 5
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },
});
