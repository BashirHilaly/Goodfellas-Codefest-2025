import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function CameraScreen() {
  return (
    <View>
      <Text className="text-red-500">This screen is the camera</Text>
      <Link href="/(form)/9imageConfirm">Press Button!</Link>
    </View>
  );
}
