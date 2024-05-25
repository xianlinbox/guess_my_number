import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import GameStart from "./screens/game_start";
import { useState } from "react";
import Game from "./screens/game";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function onUserConfirm(number) {
    setUserNumber(number);
  }
  let screen = <GameStart onUserConfirm={onUserConfirm} />;
  if (userNumber) {
    screen = <Game userNumber={userNumber} />;
  }
  return (
    <LinearGradient style={styles.appContainer} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView>{screen}</SafeAreaView>
        {/* <GameStart /> */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
