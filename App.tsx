/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { CoordinatesInput } from './components/coordinatesInput';

const App: React.FC = () => {

  return (
    <View style={styles.containerFront}>
      <View style={styles.textBox}>
        <Text style={styles.headline}> Find the Place on Map</Text>
      </View>
      <CoordinatesInput
        icon="md-earth-sharp"
        placeholderLat="Latitude, ex. 62.2426"
        placeholderLong="Longitude, ex. 25.7473" 
        key={null} 
        latitude={''} 
        longitude={''} 
        type={''} 
        props={undefined}/>

    </View>
  )


}

export default App;

const styles = StyleSheet.create({
  containerFront: {
    flex: 1,
  },
  textBox: {
    padding: 10,

  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})