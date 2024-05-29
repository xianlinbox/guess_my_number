import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/title";
import PrimaryButton from "../components/primary_button";
import { Colors } from "../constants/colors";
function GameOver({ startNewGame, userNumber, rounds }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number
        <Text style={styles.highlight}>{" " + userNumber}</Text> .
      </Text>
      <PrimaryButton onPressHandler={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    marginBottom: 36,
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary_purple,
  },
});
