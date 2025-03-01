import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function RoomDetailsScreen() {
  return (
    <View>
      <Text className="text-red-500">
        Here you specify the details of the room
      </Text>
      <Link href="/(form)/3projDesc">Continue</Link>
    </View>
  );
}
