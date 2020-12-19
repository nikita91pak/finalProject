import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';
import SelectParking from '../components/SelectParking/SelectParking';
import TextBold from '../components/UI/Text/TextBold';
import TextRegular from '../components/UI/Text/TextRegular';
import {
  getHandle,
  putHandle,
  postHandle,
  deleteHandle,
  findIndex,
  handleExistOrders
} from '../utilitys/utilitys';
import Card from '../components/UI/Card/Card';
import CardWrapper from '../components/UI/Card/CardWrapper';
import TitleWithBackground from '../components/UI/TitleWithBackground/TitleWithBackground';
import {COLORS} from '../conts/consts';
import {OS} from '../utilitys/utilitys';
import Modal from '../components/UI/Modal/Modal';
import QR from '../components/QR/QR';
import {useRoute} from '@react-navigation/native'
export default HomeScreen = (props) => {
   const route = useRoute()
  const [currnetParking, setCurrnetParking] = useState(route.params?.selected ? route.params.selected : 'holon');
  const [currnetSlot, setCurrnetSlot] = useState({}); // fetch parking from firebase database
  const [parking, setParking] = useState({}); // parking object
  const [isLoading, setIsLoading] = useState(false); // show indecator loading...
  const [isReserve, setIsReserve] = useState(false); // if user select slot of parcking
  const [modalVisible, setModalVisible] = useState(false);
  const [order, setOrder] = useState({})
  const styleBtn = useRef(OS === 'android' ? COLORS.blue : COLORS.white)
    .current;
  const [isSubmited, setIsSubmited] = useState(false);

  const getdata = useCallback(async () => {
    setIsLoading(true);
    const response = await getHandle(`${currnetParking}.json`);
    handleExistOrders(props.params.id)
    .then(response =>{ 
      console.log('response resolve',response);
      setOrder({...response})
    })
    .catch(response => {
      console.log('response',response);
      setOrder({...response})
    })
    setParking({...response});
    setIsLoading(false);
    
  }, [parking.parkings, order.idOrder]);

  useEffect(() => {
    getdata();
  }, [currnetParking]);

  const handleReserve = (item) => {
    setCurrnetSlot({...item, isFree: false});
    setIsReserve(true);
  };
  const canchelOrder = async () => {
    const index = findIndex(parking.parkings, 'name', currnetSlot.name); //this logic for find index slot for update data in data base
    if (index > -1 || isSubmited  ) {
      await putHandle(
        `/${currnetParking}/parkings/${index}.json`,
        JSON.stringify({...currnetSlot, isFree: true}),
      );
      await deleteHandle(`/orders/${order.idOrder}.json`)
      setCurrnetSlot({});
      setIsReserve(false);
      setModalVisible(false);
      setIsSubmited(false);
      setOrder({})
    }else if(order.idCostumer){
      const index = findIndex(parking.parkings, 'name', order.nameSlot);
      await putHandle(
        `/${currnetParking}/parkings/${index}.json`,
        JSON.stringify({name: order.nameSlot, isFree: true}),
      );
      await deleteHandle(`/orders/${order.idOrder}.json`)
      setOrder({})
      setCurrnetSlot({});
      setIsReserve(false);
      setModalVisible(false);
    }else {
      setIsSubmited(false);
      setCurrnetSlot({});
      setIsReserve(false);
    }
  };

  const renderPayment = () => {
   if(order.idCostumer){
     return <QR data={order} />
   } else if (isSubmited) {
      return <QR data={currnetSlot} />;
    } else {
      return (
        <>
          <View>
            <TextRegular fontSize={30} color={COLORS.black}>
              Price {parking.price} nis for day.
            </TextRegular>
          </View>
          <View
            style={{
              backgroundColor: isReserve ? COLORS.blue : COLORS.gray,
              opacity: isReserve ? 1 : 0.6,
              borderRadius: 5,
            }}>
            <Button
              title="PAY"
              color={isReserve ? styleBtn : COLORS.lightGray}
              disabled={!isReserve}
              onPress={submitOrder}
            />
          </View>
        </>
      );
    }
  };
  const submitOrder = async () => {
    const {params} = props;
    const index = findIndex(parking.parkings, 'name', currnetSlot.name); //this logic for find index slot for update data in data base
    if (index > -1) {
      await putHandle(
        `/holon/parkings/${index}.json`,
        JSON.stringify(currnetSlot),
      );
      const resposne = await postHandle(
        `/orders.json`,
        JSON.stringify({
          nameParking: parking.name,
          nameSlot: currnetSlot.name,
          idCostumer: params.id,
          nameCostumer: params.name,
        }),
      );
      setIsSubmited(true);
      setOrder({
          idOrder: resposne.name,
          nameParking: parking.name,
          nameSlot: currnetSlot.name,
          idCostumer: params.id,
          nameCostumer: params.name,
      })
    }
  };
  const handleOpenModal = () => {
    if (isSubmited || order.idCostumer) {
      setModalVisible(true);
    } else {
      setCurrnetSlot({});
      setIsReserve(false);
      setModalVisible(false);
    }
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const renderItem = ({item}) => {
    return (
    <Card
      item={{...item}}
      isReserve={isReserve || order.idCostumer}
      canchelOrder={handleOpenModal}
      handleReserve={handleReserve}
      isSelected={currnetSlot.name === item.name || order.nameSlot === item.name}
    />
  );}
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
          <CardWrapper>{renderPayment()}</CardWrapper>
        </View>
      </View>
      <Modal
        canchelOrder={canchelOrder}
        handleCloseModal={handleCloseModal}
        modalVisible={modalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: 'white',
  },
  parkingList: {
    flex: 0.16,
    marginTop: 10,
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
    flex: 0.55,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});
