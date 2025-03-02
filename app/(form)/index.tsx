import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import TestCamera from "@/components/screens/TestCamera";
import SplashScreen from "@/components/screens/SplashScreen";
import OnboardingInputTemplate from "@/components/screens/OnboardingInputTemplate";
import { Camera, FileChartLine, NotebookText, Upload } from "lucide-react-native";

export default function InfoScreen() {

  const [splashScreenActive, setSplashScreenActive] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplashScreenActive(false);
  //   }, 3000);
  // }, []);

  if (splashScreenActive) {
    return (
      <SplashScreen />
    );
  }

  return (
    <OnboardingInputTemplate progressLevel={1} continueHref="/(form)/2roomDetails" progressBarPresent={false}>
      <View className="flex-1 px-8 justify-center">
        <Text className="text-3xl font-bold">Let's Get Started with Your Estimate!</Text>
        <View className="gap-y-8 py-20">
          <View className="flex-row items-center">
            <NotebookText size={25} color="black" className="mr-2" />
            <Text className="text-lg leading-5 font-normal">Tell us about your project, room dimensions, and the materials you need.</Text>
          </View>
          <View className="flex-row items-center">
            <Camera size={25} color="black" className="mr-2"/>
            <Text className="text-lg leading-5">Capture a clear image of the space for accurate measurements.</Text>
          </View>
          <View className="flex-row items-center">
            <FileChartLine size={25} color="black" className="mr-2" />
            <Text className="text-lg leading-5">See a detailed cost breakdown for materials & labor instantly!</Text>
          </View>
          <View className="flex-row items-center">
            <Upload size={25} color="black" className="pr-2" />
            <Text className="text-lg leading-5">Download or send your estimate to clients or team members.</Text>
          </View>
        </View>
      </View>
    </OnboardingInputTemplate>
  );
}