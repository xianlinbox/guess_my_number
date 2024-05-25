import { View, Text, StyleSheet } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#ddb52f",
    fontSize: 36,
    fontWeight: "bold",
  },
});
