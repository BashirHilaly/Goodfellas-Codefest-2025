import { Image, StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text className="text-red-500">
        Hello World I am Daniel! Please Click this button to load the prompt to
        the AI model.
      </Text>
      <View>
        <Button title="Press Me" />
      </View>
    </View>
  );
}
