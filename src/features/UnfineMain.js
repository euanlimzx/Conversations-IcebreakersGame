import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform,StatusBar,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Unfine } from './Unfine';
import { useFonts } from 'expo-font';

export const UnfineMain=({setPage})=> {
  const [fontsLoaded] = useFonts({
    'ZenAntique': require('../assets/fonts/ZenAntique-Regular.ttf')
  });
  const [arr, setArr] = useState([
    'What can the person opposite you improve on?', 
    'Who here do you feel the most uncomfortable with?', 
    'Who is most likely to stay forever single?',
    'Play "Shoot,Shag,Marry" with three people in this room',
    'Who here do you have the most awkward conversations with?',
    'Who is the most fake in this room?',
    'Who are you least likely to approach at a party?',
    "Name the worst trait someone here has, but don't say who it is",
    "Who are you most likely to backstab?",
    'Who here avoids responsibility the most?',
    'Rank everyone here in terms of closeness',
    'Who do you find the most shallow?',
    'Who here would you want to make out with?',
    'Who are you most jealous of?',
    "Last person you'd eat dinner with?",
    "Who do you find the most pretentious?",
    'Who here is the most insecure?',
    'Who is most likely to cheat?',
    "Who here gets made fun of the most?",
    'Who is most likely to get cheated on?',
    'Most likely to resort to OnlyFans?',
    'Most likely to subscribe to OnlyFans?',
    'Who have you lied to the most?',
    'Who here seems the most empty?',
    'Who makes you the most unhappy?',
    "Who is the least trustworthy?",
    'Who is the most embarrassing to be with?',
    'Whose life support will you terminate to charge your phone?',
    'Who here gives the strongest small dick energy?',
    'Thanks for playing! Hope everyone is still friends after this :)'




    

    ]);

  // Add a new state for the index
  const [index, setIndex] = useState(0);

  // Return some JSX by slicing the array up
  // to the index, and then `map` over that array
  // and return some divs
  function getElements(arr, index) {
    return <Text style={styles.maintext}>{arr[index]}</Text>;
  }

  function nextElement(arr) {
    setIndex(index + 1);
  }

  function prevElement(arr) {
    setIndex(index - 1);
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>{setPage(0)}}>
      <Text style={styles.title}>UNFINE DINING</Text>
      </TouchableOpacity>
      <Unfine
        arr={arr}
        index={index}
        getElements={getElements}
        nextElement={nextElement}
        prevElement={prevElement}
      />
      <Text style={styles.subtitle}>
        {index + 1}/{arr.length}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    fontWeight: 400,
    textAlign: 'center',
    paddingTop: 9,
    fontSize:16,
    letterSpacing:4,
    fontFamily:'ZenAntique'
  },
  subtitle: {
    fontWeight: 500,
    textAlign: 'center',
    paddingBottom: 15,
  },
  maintext: {
    flex: 0.6,
    fontSize: 19,
    lineHeight: 21,
    fontWeight: 600,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
  },
});
