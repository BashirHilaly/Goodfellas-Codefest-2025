import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import TestCamera from "@/components/screens/TestCamera";
import OnboardingInputTemplate from "@/components/screens/OnboardingInputTemplate";
export default function InfoScreen() {

  const [templateTesting, setTemplateTesting] = useState(true);
  
  if (templateTesting) {
    return (
      <OnboardingInputTemplate>
        <Text>Here is some info you need to know</Text>
      </OnboardingInputTemplate>
    );
  }
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Text className="text-red-500">Here is some info you need to know</Text>
        <Link href="/(form)/2roomDetails" className="bg-blue-500 px-4 py-2 rounded-lg">
          <Text className="text-white font-semibold text-center">Continue</Text>
        </Link>
        {/* <View className="flex-1">
          <TestCamera />
        </View> */}
      </View>
    </SafeAreaView>
  );
}
