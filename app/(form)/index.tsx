import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import TestCamera from "@/components/screens/TestCamera";
import ProgressBar from "@/components/ui/ProgressBar";

export default function InfoScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <ProgressBar currentStep={0}></ProgressBar>
        <Text className="text-6xl">Before We Get Started</Text>
        <Text className="text-red-500">Here is some info you need to know</Text>
        <Link
          href="/(form)/2roomDetails"
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold text-center">Continue</Text>
        </Link>
        <View className="flex-1">
          <TestCamera />
        </View>
      </View>
    </SafeAreaView>
  );
}
