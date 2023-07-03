import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const PizzaTranslator = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <Text style={{}}>I am PizzaTranslator</Text>
      <TextInput
        style={styles.text_input_wrapper}
        placeholder="Type here to translate"
        onChangeText={setText}
      />
      <Text>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" , ")}
      </Text>
    </View>
  );
};

export default PizzaTranslator;

const styles = StyleSheet.create({
  text_input_wrapper: {
    borderWidth: 1,
    borderColor: "#444",
    width: width * 0.6,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
