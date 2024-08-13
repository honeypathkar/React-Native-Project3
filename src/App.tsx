import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import One from '../assests/One.png';
import Two from '../assests/Two.png';
import Three from '../assests/Three.png';
import Four from '../assests/Four.png';
import Five from '../assests/Five.png';
import Six from '../assests/Six.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image
        source={imageUrl} // Directly pass the imported image
        style={{width: 200, height: 200}} // Add styles to define the size of the image
      />
    </View>
  );
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(One);

  const rollTheDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(One);
        break;
      case 2:
        setDiceImage(Two);
        break;
      case 3:
        setDiceImage(Three);
        break;
      case 4:
        setDiceImage(Four);
        break;
      case 5:
        setDiceImage(Five);
        break;
      case 6:
        setDiceImage(Six);
        break;
      default:
        setDiceImage(One);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactHeavy', options);
  };

  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.container}>
        <Text style={styles.headingText}>Roll the Dice</Text>
        <Dice imageUrl={diceImage} />
        <View>
          <Pressable onPress={rollTheDice}>
            <Text style={styles.btn}>Click Me</Text>
          </Pressable>
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
    paddingTop: 70,
  },
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  diceContainer: {
    paddingVertical: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: 'white',
    borderRadius: 5,
    cursor: 'pointer',
    marginTop: -50
  },
});
