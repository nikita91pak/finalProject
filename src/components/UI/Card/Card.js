import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextRegular from '../Text/TextRegular';
import {COLORS} from '../../../conts/consts';
import TransparetBtn from '../Buttons/TransparetBtn';


//global card component
const Card = ({item, isReserve, handleReserve, isSelected, canchelOrder}) => {
  const renderButton = () => {
    if (isSelected) {
      return <TransparetBtn text="Cancel" onPress={canchelOrder} />;
    } else {
      return (
        !isReserve &&
        item.isFree && (
          <TransparetBtn
            text="To Book"
            onPress={() => handleReserve(item)}
          />
        )
      );
    }
  };
  return (
    <View
      style={[
        styles.container,
        {borderColor: isSelected || item.isFree ? COLORS.black : COLORS.red},
      ]}>
      <View style={{flex: 1}}>
        <TextRegular textAlign="left">slot {item.name}</TextRegular>
        {!item.isFree && (
          <TextRegular color={COLORS.gray} fontSize={16} textAlign="left">
            Parking is busy
          </TextRegular>
        )}
        {isSelected && (
          <TextRegular color={COLORS.gray} fontSize={16} textAlign="left">
            You book a parking
          </TextRegular>
        )}
      </View>
      <View style={{flex: 1}}>{renderButton()}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    height: 70,
    borderWidth: 0.5,
    flexDirection: 'row',
    margin: 5,
    alignContent: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1
  },
});
