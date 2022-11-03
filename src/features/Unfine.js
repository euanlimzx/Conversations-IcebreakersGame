import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const Unfine = ({arr,index,nextElement,prevElement,getElements}) => {


  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={prevElement}
        disabled={index < 1}>
        <Text style={index < 1 ? styles.disabledtext : styles.text}>⇐</Text>
      </Pressable>
      {getElements(arr, index)}
      <Pressable
        style={styles.button}
        onPress={nextElement}
        disabled={index > arr.length - 2}>
        <Text
          style={index > arr.length - 2 ? styles.disabledtext : styles.text}>
          ⇒
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 17,
    paddingVertical: 120,
  },
  text: {
    fontSize: 25,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  disabledtext: {
    fontSize:25,
    color: '#D3D3D3',
  },
});
