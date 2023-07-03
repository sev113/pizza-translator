import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PizzaTranslator from "./src/pages/PizzaTranslator";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
      <PizzaTranslator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
