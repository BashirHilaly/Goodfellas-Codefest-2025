import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";

export default function InfoScreen() {
  return (
    <View>
      <ProgressBar currentStep={0}></ProgressBar>
      <Text className="text-6xl">Before We Get Started</Text>
      <Link href="/(form)/2roomDetails">Continue</Link>
    </View>
  );
}
