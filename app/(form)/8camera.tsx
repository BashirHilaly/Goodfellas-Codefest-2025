import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import TestCamera from "@/components/screens/TestCamera";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/ui/BackButton";

export default function CameraScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="absolute z-10">
        <BackButton></BackButton>
      </View>
      <TestCamera />
    </SafeAreaView>
  );
}
