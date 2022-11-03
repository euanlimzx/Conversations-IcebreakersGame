import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform,StatusBar,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Ori } from './Ori';
import { useFonts } from 'expo-font';

export const OriMain=({setPage})=> {
  const [fontsLoaded] = useFonts({
    'ZenAntique': require('../assets/fonts/ZenAntique-Regular.ttf')
  });
  const [arr, setArr] = useState([
    "Name your top 3 pet peeves in people ",
    "What is your most embarrassing story?",
    "WILDCARD: Read out your search history to the group",
    "Describe your highest and lowest moments in life.",
    "How much time do you spend on your phone?",
    "What was your most irrational reason for disliking someone?",
    "Who is your favorite family member and why?",
    "If you could change one thing about your life, what would it be?",
    "WILDCARD: Rank how close you are to everyone in the group",
    "Have you ever pretended to not like someone? Share your story.",
    "What is the most expensive thing you have bought?",
    "When is the most recent time you cried?",
    "What is your favorite coping mechanism?",
    "What are you most nervous about right now?",
    "BURNING BRIDGES: Who do you think dislikes the group the most?",
    "Is your online persona an accurate representation of you?",
    "Describe the worst rejection you have experienced.",
    "What is the most recent lie you have told?",
    "Do you think your younger self would have been proud of you?",
    "Share a controversial opinion that you have.",
    "Describe your angriest moment.",
    "WILDCARD: Hug someone in the group",
    "Describe a time where you settled for less.",
    "Do you avoid asking for help? If so, why?",
    "Are you good at responding to criticism?",
    "What is one thing you have given up on?",
    "WILDCARD: Name one annoying trait someone in the group has, but don't say who.",
    "What seems easy for everybody but you?",
    "Are you still holding on to something from your past?",
    "Have you ever felt excluded? What happened?",
    "Describe your most recent heartbreak.",
    "What is one thing people assume about you that isn't true?",
    "Describe a time you spoke behind someone else's back.",
    "BURNING BRIDGES: Who here looks like they will be the least successful?",
    "Do you have a fear of commitment? Why?",
    "Name your biggest insecurity.",
    "WILDCARD: Hold the hand of the person sitting next to you for the remainder of this game.",
    "Describe a time you led someone on.",
    "What do you not like about your parents?",
    "State your top guilty pleasure.",
    "BUILDING BRIDGES: Single out a person in the group to go lunch with.",
    "What is something you easily get jealous of?",
    "How would someone know if you have a crush on them?",
    "YES or NO: Would you go on a date with someone in this group?",
    "Ship the previous player with someone in the group.",
    "When is the last time someone let you down?",
    "Decide where the group should meet for supper tonight.",
    "If you were to imagine where your life was headed, would you be happy with what you see?",
    "WILDCARD: Say one nice thing about the individual opposite you.",
    "Thanks for playing :)"




    

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
      <Text style={styles.title}>EXTREME ICEBREAKERS</Text>
      </TouchableOpacity>
      <Ori
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
