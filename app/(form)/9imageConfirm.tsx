import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ContinueButton from "@/components/ui/ContinueButton";
import BackButton from "@/components/ui/BackButton";

export default function ImageConfirmScreen() {
  return (
    <View>
      <Text className="text-red-500">You will confirm the image here</Text>
      <BackButton buttonText="Retake"></BackButton>
      <ContinueButton nextLink="/(output)/loading" buttonText="Confirm" />
    </View>
  );
}
