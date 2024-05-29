import { Text, View, Image, StyleSheet } from "react-native";
import { Title } from "../components/title";
import { PrimaryButton } from "../components/primary_button";
function GameOver({ startNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")}></Image>
      </View>
      <Text></Text>
      <PrimaryButton onPressHandler={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {},
  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
    overflow: "hidden",
  },
});
