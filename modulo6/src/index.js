import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello</Text>
    </View>
  );
}
