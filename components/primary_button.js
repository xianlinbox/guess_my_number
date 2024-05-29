import { View, Text, StyleSheet, Pressable } from "react-native";
function PrimaryButton({ onPressHandler, children }) {
  return (
    <View style={styles.primaryButton}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => (pressed ? [styles.pressableItem, styles.pressed] : styles.pressableItem)}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButton: { borderRadius: 28, margin: 4, overflow: "hidden" },
  pressableItem: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
