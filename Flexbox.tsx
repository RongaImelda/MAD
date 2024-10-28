import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.topContainer}>
        <View style={styles.blackSquare}></View>
        <View style={styles.yellowSquare}></View>
        <View style={styles.blackSquare}></View>
      </View>

      <View style={styles.middleContainer}>
        <Image
          source={require('./assets/images/logounklab.png')}
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.blackSquare}></View>
        <View style={styles.yellowSquare}></View>
        <View style={styles.blackSquare}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    paddingVertical: 20, 
    paddingLeft: 10, 
    backgroundColor: 'red',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'blue', 
  },
  blackSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    marginRight: 15, 
  },
  yellowSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    marginRight: 15, 
  },
  middleContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  logo: {
    width: 200, 
    height: 200,
    marginBottom: 20,
  },
});

export default App;
