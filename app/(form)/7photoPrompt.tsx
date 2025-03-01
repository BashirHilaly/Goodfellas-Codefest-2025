import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function PhotoPromptScreen() {
  return (
    <View>
      <Text className="text-red-500">
        Here it will tell you to take a picture and what it should look like
      </Text>
      <Link href="/(form)/8camera">Take Photo</Link>
    </View>
  );
}
