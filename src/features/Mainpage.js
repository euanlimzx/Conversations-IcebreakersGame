import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const Mainpage = ({setPage}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>CONVERSATIONS</Text>
      <View style={{ padding: 10 }}>
      <TouchableOpacity onPress={()=>setPage(3)}>
        <Card style={styles.card} mode="outlined">
          <Card.Content>
            <Title style={styles.title}>EXTREME ICEBREAKERS</Title>
            <Paragraph style={styles.paragraph}>Heart To Heart Talk Speedrun</Paragraph>
          </Card.Content>
        </Card>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={()=>setPage(1)}>
        <Card style={styles.card} mode="outlined">
          <Card.Content>
            <Title style={styles.title}>UNFINE DINING</Title>
            <Paragraph style={styles.paragraph}>As seen on One Week Love by The Smart Local</Paragraph>
          </Card.Content>
        </Card>
        </TouchableOpacity>
      </View>
      
      <View style={{ padding: 10 }}>
      <TouchableOpacity onPress={()=>setPage(2)}>
        <Card style={styles.card} mode="outlined">
          <Card.Content>
            <Title style={styles.title}>DATE NIGHT</Title>
            <Paragraph style={styles.paragraph}>36 questions to fall in love, by The New York Times</Paragraph>
          </Card.Content>
        </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 180,
    shadowColor: '#171717',
    shadowOffset: { width: -4, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  title:{
    fontWeight: 500,
    textAlign: 'center',
    paddingTop: 8,
    fontSize:15,
    letterSpacing:4,
    fontFamily:'ZenAntique'
  },
  paragraph: {
    flex: 0.6,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 200,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'justify',
    paddingTop:15,
    fontFamily:'ZenAntique'
  },
  maintitle:{
    fontWeight: 500,
    textAlign: 'center',
    paddingTop: 3,
    fontSize:20,
    letterSpacing:4,
    fontFamily:'ZenAntique'
  },
});
