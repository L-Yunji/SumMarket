import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TopBar from './components/TopBar';
import ListView from './components/ListView';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <TopBar />
      <ListView />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
