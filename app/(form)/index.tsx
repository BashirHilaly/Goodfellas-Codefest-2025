import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import ContinueButton from "@/components/ui/ContinueButton";

export default function InfoScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Text className="text-6xl">Before We Get Started</Text>
        <Text className="text-red-500">Here is some info you need to know</Text>
        <ContinueButton nextLink="/(form)/2roomDetails" buttonText="Continue" />
      </View>
    </SafeAreaView>
  );
}
