import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";

export default function BuildMaterialsScreen() {
  return (
    <View>
      <ProgressBar currentStep={3}></ProgressBar>
      <Text className="text-red-500">
        Here you list the materials your client has requested
      </Text>
      <Link href="/(form)/5addrTime">Continue</Link>
    </View>
  );
}
