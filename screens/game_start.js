import { View, TextInput, Button, StyleSheet } from "react-native";
function GameStart() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" />
        </View>
        <View style={styles.button}>
          <Button title="Confirm" />
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
