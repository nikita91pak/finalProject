import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import SelectParkingItem from './SelectParkingItem';

export default ({items}) => {
  const renderItmes = () => {
    if (Array.isArray(items) || items.length) {
      return items.map((item) => <SelectParkingItem key={`${item}`} item={item} />);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal styles={styles.scrollView}>
        {renderItmes()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginVertical: 5,
  },
});
