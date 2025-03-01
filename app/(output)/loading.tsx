import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function LoadingScreen() {
    // create a function that counts for 5 seconds just to test fake loading functionality
    // after 5 seconds, go to the budget screen

  return (
    <View>
      <Text className="text-green-500">
        Hello! I am currently loading your data into the AI model. Please wait
        until it is done.
      </Text>
      <Link href="/(tabs)/budget">We are done!</Link>
    </View>
  );
}
