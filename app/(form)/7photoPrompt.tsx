import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";
import ContinueButton from "@/components/ui/ContinueButton";
import BackButton from "@/components/ui/BackButton";

export default function PhotoPromptScreen() {
  return (
    <View>
      <ProgressBar currentStep={5}></ProgressBar>
      <BackButton></BackButton>
      <Text className="text-4xl">Capture Project Area</Text>
      <ContinueButton nextLink="/(form)/8camera" buttonText="Continue" />
    </View>
  );
}
