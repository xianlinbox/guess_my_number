import { Text, StyleSheet } from "react-native";

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
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
