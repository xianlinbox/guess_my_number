import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import GameStart from "./screens/game_start";
import Game from "./screens/game";

export default function App() {
  return (
    <LinearGradient style={styles.appContainer} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView>
          <Game userNumber={23} />
        </SafeAreaView>
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
