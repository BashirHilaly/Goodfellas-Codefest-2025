import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Set a timer to navigate to the Info Screen after 2 seconds
    const timer = setTimeout(() => {
      router.replace("/(output)/estimate");
    }, 3000);

    // Cleanup the timer if the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View>
      <Text className="text-green-500">
        Hello! I am currently loading your data into the AI model. Please wait
        until it is done.
      </Text>
    </View>
  );
}
