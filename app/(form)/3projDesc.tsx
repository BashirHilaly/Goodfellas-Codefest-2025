import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";

export default function ProjDescScreen() {
  return (
    <View>
      <ProgressBar currentStep={2}></ProgressBar>
      <Text className="text-red-500">
        Here you input a prompt of what your project is
      </Text>
      <Link href="/(form)/4buildMaterials">Continue</Link>
    </View>
  );
}
