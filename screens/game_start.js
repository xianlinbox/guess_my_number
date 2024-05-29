import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/primary_button";
import { Colors } from "../constants/colors";
import Title from "../components/title";
import InstructionText from "../components/instruction_text";
import Card from "../components/card";
function GameStart({ onUserConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function reset() {
    setEnteredNumber("");
  }

  function confirm() {
    const inputNumber = parseInt(enteredNumber);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid Number", "This game only allow number between 1 and 99!", [
        { title: "Okay", style: "default", onPress: reset },
      ]);
    }
    onUserConfirm(inputNumber);
  }

  function textInputHandler(input) {
    setEnteredNumber(input);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={textInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPressHandler={reset}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPressHandler={confirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary_yellow,
    borderBottomWidth: 2,
    color: Colors.primary_yellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default GameStart;
