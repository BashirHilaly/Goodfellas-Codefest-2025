import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";

export default function AddrTimeScreen() {
  return (
    <View>
      <ProgressBar currentStep={4}></ProgressBar>
      <Text className="text-red-500">
        Here you put the address of the place and the time schedule
      </Text>
      <Link href="/(form)/6fieldConfirm">Continue</Link>
    </View>
  );
}
