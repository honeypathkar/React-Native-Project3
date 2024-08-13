import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const One = require('../assests/One.png');

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.container}>
        <Text style={styles.headingText}>Roll the Dice</Text>
        <View style={styles.diceContainer}>
          <Image
            source={One} // Directly pass the imported image
            style={{width: 150, height: 150}} // Add styles to define the size of the image
          />
          <Text style={styles.btn}>Click Me</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  diceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 5,
    cursor: 'pointer',
  },
});
