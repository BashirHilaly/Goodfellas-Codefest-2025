import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function InfoScreen() {
  return (
    <View>
      <Text className="text-6xl">Before We Get Started</Text>
      <Link href="/(form)/2roomDetails">Continue</Link>
    </View>
  );
}
