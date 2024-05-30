import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import Title from "../components/title";
import NumberContainer from "../components/number_container";
import PrimaryButton from "../components/primary_button";
import Card from "../components/card";
import InstructionText from "../components/instruction_text";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (max == min) {
    return rndNum;
  } else if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let min_boundary = 1;
let max_boundary = 100;
let rounds = 0;
function Game({ userNumber, gameOverHandler }) {
  const initialGuessNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuessNumber, setCurrentGuessNumber] = useState(initialGuessNumber);
  const [guessRounds, setGuessRounds] = useState([initialGuessNumber]);

  useEffect(() => {
    if (userNumber == currentGuessNumber) {
      gameOverHandler(rounds);
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
    rounds++;
    if (direction === "lower") {
      max_boundary = currentGuessNumber;
    } else {
      min_boundary = currentGuessNumber;
    }
    const nextGuessNumber = generateRandomBetween(min_boundary, max_boundary, currentGuessNumber);
    setCurrentGuessNumber(nextGuessNumber);
    setGuessRounds((previousGrounds) => [nextGuessNumber, ...previousGrounds]);
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
      <View style={styles.logContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.itemText}>#{guessRounds.length - itemData.index}</Text>
                <Text style={styles.itemText}>Opponent's Guess: {itemData.item}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
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
  logContainer: {
    padding: 16,
  },
  listItem: {
    borderColor: Colors.primary_purple,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary_yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
