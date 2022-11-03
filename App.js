import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { UnfineMain } from './src/features/UnfineMain';
import { Mainpage } from './src/features/Mainpage';
import { LoveMain } from './src/features/LoveMain';
import {OriMain} from './src/features/OriMain';

export default function App() {
  const [page, setPage] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      {page == 0 ? <Mainpage setPage={setPage} /> : null}
      {page == 1 ? <UnfineMain setPage={setPage} /> : null}
      {page == 2 ? <LoveMain setPage={setPage} /> : null}
      {page == 3 ? <OriMain setPage={setPage} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
