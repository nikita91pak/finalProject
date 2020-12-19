import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {COLORS} from '../conts/consts';
import ParkingData from '../components/parkingData/ParkingData';
import {getHandle} from '../utilitys/utilitys';

const initailState = {
  parkings: {},
  marks: [],
  selected: {}
};
const Map = () => {
  const [parking, setParking] = useState(initailState);
  const [location, setLocation] = useState({
    latitude: 32.085025,
    longitude: 34.781713,
  });
  const fetcData = useCallback(async () => {
    const marks = await getHandle('/listParkings.json');
    const parking = await getHandle(`/${marks[0].name}.json`);
    setParking({...parking, parkings: {...parking}, marks: [...marks]});
    setLocation({
      latitude: marks[0].geolocation.latitude,
      longitude: marks[0].geolocation.longitude,
    });
  }, [parking]);
  const updateData = useCallback(async (path) => {      
      const parking = await getHandle(`/${path}.json`);
      const marks = await getHandle('/listParkings.json')
      setParking({...parking, parkings: {...parking}, marks: [...marks]});
  }, [parking.selected]);

  useEffect(() => {
    fetcData();
  }, []);
  useEffect(() => {
    if(parking.selected?.name){
      updateData(parking.selected.name)
    }
  }, [parking.selected]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        zoomEnabled={true}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {parking.marks &&
          parking.marks.map((marker, index) => {
            return (
              <Marker
                onPress={e => {
                  setParking({...parking, selected: {...marker}})
                }}
                key={index}
                coordinate={{...marker.geolocation}}
                title={marker.name}
                description={marker.description}
              />
            );
          })}
      </MapView>
      <View style={styles.data}>
        <ParkingData parking={parking.parkings} />
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 0.8,
  },
  data: {
    flex: 0.2,
    backgroundColor: COLORS.white,
  },
});
