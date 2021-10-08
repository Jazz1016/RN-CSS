import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.parentView}>
      <View style={styles.yellowView}>
        <Text>Hello World!</Text>
      </View>
      <View style={styles.redView}>
        <Text>Red View</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  redView: {
    flex: 1,
    backgroundColor: 'red',
    height: 50,
  },
  parentView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
