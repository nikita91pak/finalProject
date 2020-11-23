import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
const Map = () => {
  return (
    
    <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={{ // initial region set to Bileto
                latitude: 50.0517273,
                longitude: 14.4286503,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#F5FCFF"
  },
  map: {
      flex: 1,
  }
});
