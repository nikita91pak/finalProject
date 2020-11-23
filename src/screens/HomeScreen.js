import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Button
} from 'react-native';
import SelectParking from '../components/SelectParking/SelectParking';
import TextBold from '../components/UI/Text/TextBold';
import TextRegular from '../components/UI/Text/TextRegular';
import {getHandle} from '../utilitys/utilitys';
import Card from '../components/UI/Card/Card';
import CardWrapper from '../components/UI/Card/CardWrapper';
import TitleWithBackground from '../components/UI/TitleWithBackground/TitleWithBackground';
import {COLORS} from '../conts/consts';
import { OS } from '../utilitys/utilitys'

export default () => {
  const [currnetParking, setCurrnetParking] = useState('holon');
  const [currnetSlot, setCurrnetSlot] = useState({}); // fetch parking from firebase database
  const [parking, setParking] = useState({}); // parking object
  const [isLoading, setIsLoading] = useState(false); // show indecator loading...
  const [isReserve, setIsReserve] = useState(false); // if user select slot of parcking
  const styleBtn = useRef(OS === 'android' ? COLORS.blue : COLORS.white).current
  const getdata = useCallback(async () => {
    setIsLoading(true);
    const response = await getHandle();
    setIsLoading(false);
    setParking({...response});
  }, [parking.parkings]);

  useEffect(() => {
    getdata();
  }, [currnetParking]);
  const handleReserve = (item) => {
    setCurrnetSlot({...item, isFree: false})
    setIsReserve(true)
  };
  const canchelOrder = () => {
     setCurrnetSlot({})
     setIsReserve(false)
  }
  const renderItem = ({item}) => (
    <Card
      item={{...item}}
      isReserve={isReserve}
      canchelOrder={canchelOrder}
      handleReserve={handleReserve}
      isSelected={currnetSlot.name === item.name}
    />
  );
  if (isLoading) {
    return (
      <View style={[styles.contianer, {justifyContent: 'center'}]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.contianer}>
      <View style={styles.parkingList}>
        <SelectParking items={['holon', 'tel-aviv']} />
      </View>
      <View style={styles.body}>
        <TextBold fontSize={30} textAlign="left">
          {parking.name} Parking
        </TextBold>
        <TitleWithBackground>parking cell</TitleWithBackground>
        <SafeAreaView style={styles.list}>
          <FlatList
            data={parking.parkings}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </SafeAreaView>
        <TitleWithBackground>Payments</TitleWithBackground>
        <View style={styles.payment}>
          <CardWrapper>
            <View>
              <TextRegular fontSize={30} color={COLORS.black} >
                Price {parking.price} nis for day.
              </TextRegular>
            </View>
            <View style={{
              backgroundColor: isReserve? COLORS.blue : COLORS.gray,
              opacity: isReserve? 1 : .6,
              borderRadius: 5
              }}>
               <Button title="PAY" color={isReserve? styleBtn : COLORS.lightGray} disabled={!isReserve}/>
            </View>
          </CardWrapper>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  parkingList: {
    flex: 0.15,
  },
  body: {
    flex: 0.9,
    justifyContent: 'center',
  },
  list: {
    flex: 0.6,
    paddingHorizontal: 8,
  },
  payment: {
    flex: 0.35,
    paddingHorizontal: 8,
  }
});
