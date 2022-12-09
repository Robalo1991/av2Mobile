
import * as React from 'react';
import Routes from './routes';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
     <View style={styles.container}>
      <Routes />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000000',
    width: '100%',
  },
});
