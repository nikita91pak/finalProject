import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextBold from '../UI/Text/TextBold';
import TextRegular from '../UI/Text/TextRegular'
import { COLORS } from '../../conts/consts'
import TransparetBtn from '../UI/Buttons/TransparetBtn'
import { useNavigation } from '@react-navigation/native';
import openMap from 'react-native-open-maps';
const ParkingData = ({parking}) => {
    const { name, geolocation } = parking
    const navigation = useNavigation();
    const navigate = () => {

       
        navigation.navigate('TabHome', {selected: name})
    }
    const renderFreeSlot = () => {
       const count =  parking.parkings.filter( slot =>{
            if(slot.isFree){
                return slot
            }
          
        })
        return count.length
    }
    return ( 
        <View style={styles.container}>
            <View style={styles.data}>
                <View tyle={styles.info}>
                   <TextBold textAlign='left'>Parking {parking?.name}</TextBold>
                   <TextRegular color={COLORS.gray} textAlign='left'>free {
                    parking.parkings && renderFreeSlot()
                   } </TextRegular>
                   <TextRegular color={COLORS.gray} textAlign='left'>shedule {`${parking?.schedule}`}</TextRegular>
                </View>
                <View tyle={styles.navigation}>
                <TransparetBtn text='navigate' onPress={() => {
                    openMap({ latitude: geolocation.latitude, longitude: geolocation.longitude });
                }}/>
                <TransparetBtn text='Select' onPress={navigate}/>
                </View>
            </View>
        </View>
    )
}

export default ParkingData

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 10
    },
    data: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    info :{
        flex: 1
    },
    navigation: {
        flex: 1
    }
})
