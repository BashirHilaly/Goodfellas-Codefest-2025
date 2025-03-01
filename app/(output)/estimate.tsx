import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function EstimateScreen() {
  return (
    <View>
      <Text className="text-blue-500">
        Hello! The model is finished. This is the output: Nothing because it
        doesn't work yet.
      </Text>
      <Link href="/">Press this button to share</Link>
    </View>
  );
}
