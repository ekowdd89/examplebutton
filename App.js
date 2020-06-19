import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=>{
          alert("Hello")
        }}
        style={styles.BtnStyl}>
        <Text>Click Me !</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnStyl:{
    backgroundColor:'red',
    padding:10,
    paddingHorizontal:10,
    borderRadius:10
  }
});
