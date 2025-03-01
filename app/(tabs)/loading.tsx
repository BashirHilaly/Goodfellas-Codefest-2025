import { Image, StyleSheet, Text, View } from "react-native";

export default function LoadingScreen() {
  return (
    <View>
      <Text className="text-green-500">
        Hello! I am currently loading your data into the AI model. Please wait
        until it is done.
      </Text>
    </View>
  );
}
