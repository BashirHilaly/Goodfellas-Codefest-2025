import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function InfoScreen() {
  return (
    <View>
      <Text className="text-red-500">Here is some info you need to know</Text>
      <Link href="/(form)/2roomDetails">Continue</Link>
    </View>
  );
}
