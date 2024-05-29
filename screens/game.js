import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/title";
import NumberContainer from "../components/number_container";
import PrimaryButton from "../components/primary_button";
import Card from "../components/card";
import InstructionText from "../components/instruction_text";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let min_boundary = 1;
let max_boundary = 99;
function Game({ userNumber, gameOverHandler }) {
  const initialGuessNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuessNumber, setCurrentGuessNumber] = useState(initialGuessNumber);

  useEffect(() => {
    if (userNumber == currentGuessNumber) {
      gameOverHandler();
    }
  }, [userNumber, currentGuessNumber, gameOverHandler]);

  function nextGuess(direction) {
    if (
      (direction === "lower" && userNumber > currentGuessNumber) ||
      (direction === "higher" && userNumber < currentGuessNumber)
    ) {
      Alert.alert("Warning", "Please do not lie to the game", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction === "lower") {
      max_boundary = currentGuessNumber - 1;
    } else {
      min_boundary = currentGuessNumber + 1;
    }
    const nextGuessNumber = generateRandomBetween(min_boundary, max_boundary, currentGuessNumber);
    setCurrentGuessNumber(nextGuessNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's Guess</Title>
      <Card>
        <NumberContainer>{currentGuessNumber}</NumberContainer>
        <InstructionText>Higer or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPressHandler={nextGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPressHandler={nextGuess.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
  },

  buttonContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
