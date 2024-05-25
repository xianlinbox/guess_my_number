import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/title";
import NumberContainer from "../components/number_container";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function Game({ userNumber }) {
  const initialGuessNumber = generateRandomBetween(1, 99, userNumber);
  const [currentGuessNumber, setCurrentGuessNumber] = useState(initialGuessNumber);

  return (
    <View>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuessNumber}</NumberContainer>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({});
