import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Set a timer to navigate to the Info Screen after 2 seconds
    const timer = setTimeout(() => {
      router.replace("/(form)/1info");
    }, 2000);

    // Cleanup the timer if the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View>
      <Text className="text-red-500">SnapQuote</Text>
    </View>
  );
}
