import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {COLORS} from '../../conts/consts';
import TextBold from '../UI/Text/TextBold';
import TextRegular from '../UI/Text/TextRegular';
export default ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.localLogo}>
          <TextBold style={styles.localLogo} color={COLORS.white}>
            {item[0]}
          </TextBold>
        </View>
      </TouchableWithoutFeedback>

      <TextRegular fontSize={20}>{item}</TextRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  localLogo: {
    backgroundColor: COLORS.blue,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginBottom: 2,
  },
});
