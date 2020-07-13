/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <View style={styles.top}>
        <Text>123</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})

export default App;
