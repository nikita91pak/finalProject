import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { COLORS } from '../../../conts/consts'
//global Modal component
export default ({canchelOrder, modalVisible,  handleCloseModal}) => {

  return (
    <View style={{...styles.centeredView, flex: modalVisible ? 1 : 0}}>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
            Are you sure you want to cancel this order?
            </Text>
            <View style={styles.btnContainer}>
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: COLORS.red}}
                onPress={canchelOrder}>
                <Text style={styles.textStyle}>yes</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: COLORS.lightGray}}
                onPress={handleCloseModal}>
                <Text style={styles.textStyle}>no</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
//style component
const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: COLORS.electromagnetic
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    minWidth: 100,
    marginRight: 5
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnContainer: {
      flexDirection: "row-reverse",
      justifyContent: 'space-around',
  }
});

