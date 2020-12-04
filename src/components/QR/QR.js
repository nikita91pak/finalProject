import React from 'react';
import QRCode from 'react-native-qrcode-generator';

import {StyleSheet, View} from 'react-native';
import { COLORS } from '../../conts/consts';

const QR = ({data}) => {

  return (
    <View style={styles.container}>
      <QRCode
        value={data}
        size={140}
        bgColor={COLORS.blue}
        fgColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
});

export default QR