import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/primary_button";
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={textInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton title="Reset" onPressHandler={reset} />
        </View>
        <View style={styles.button}>
          <PrimaryButton title="Confirm" onPressHandler={confirm} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
