import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";

export default function fieldConfirmScreen() {
  return (
    <View>
      <ProgressBar currentStep={5}></ProgressBar>
      <Text className="text-red-500">
        Here you confirm that everything is correct
      </Text>
      <Link href="/(form)/7photoPrompt">Continue</Link>
    </View>
  );
}
