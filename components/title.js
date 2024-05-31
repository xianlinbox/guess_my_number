import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
  },
});
