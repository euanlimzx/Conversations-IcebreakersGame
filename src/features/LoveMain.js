import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform,StatusBar,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Love } from './Love';
import { useFonts } from 'expo-font';

export const LoveMain=({setPage})=> {
  const [fontsLoaded] = useFonts({
    'ZenAntique': require('../assets/fonts/ZenAntique-Regular.ttf')
  });
  const [arr, setArr] = useState([
    "Both individuals are to answer each question ♡",
    "Given the choice of anyone in the world, whom would you want as a dinner guest?",
    "Would you like to be famous? In what way?",
    "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
    "What would constitute a “perfect” day for you?",
    "When did you last sing to yourself? To someone else?",
    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
    "Do you have a secret hunch about how you will die?",
    "Name three things you and your partner appear to have in common.",
    "For what in your life do you feel most grateful?",
    "If you could change anything about the way you were raised, what would it be?",
    "Take four minutes and tell your partner your life story in as much detail as possible.",
    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
    "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
    "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
    "What is the greatest accomplishment of your life?",
    "What do you value most in a friendship?",
    "What is your most treasured memory?",
    "What is your most terrible memory?",
    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
    "What does friendship mean to you?",
    "What roles do love and affection play in your life?",
    "Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.",
    "How close and warm is your family? Do you feel your childhood was happier than most other people’s?",
    "How do you feel about your relationship with your mother?",
    "Make three true “we” statements each. For instance, “We are both in this room feeling ... ”",
    "Complete this sentence: “I wish I had someone with whom I could share ...” ",
    "If you were going to become a close friend with your partner, please share what would be important for him or her to know.",
    "Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.",
    "Share with your partner an embarrassing moment in your life.",
    "When did you last cry in front of another person? By yourself?",
    "Tell your partner something that you like about them already.",
    "What, if anything, is too serious to be joked about?",
    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?",
    "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
    "Of all the people in your family, whose death would you find most disturbing? Why?",
    "Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.",
    "Will there be a second date?"




    

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
      <Text style={styles.title}>DATE NIGHT</Text>
      </TouchableOpacity>
      <Love
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
