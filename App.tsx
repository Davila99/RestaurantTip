import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Propina from './src/screens/Propina';

//import { Convertidor } from './src/components/Convertidor';


export default function App() {

  return (
    <View style={styles.container1}>
      <View>
        <Text>Propina</Text>
      </View>
      <View style={styles.container1}>
        <Propina></Propina>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 30,
    color: 'red',
    justifyContent: 'center'
  },
  container2:{
    flex: 70,
    color: 'green',
    justifyContent: 'center'
  }

})


