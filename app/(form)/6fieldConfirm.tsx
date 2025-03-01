import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function fieldConfirmScreen() {
  return (
    <View>
      <Text className="text-red-500">
        Here you confirm that everything is correct
      </Text>
      <Link href="/(form)/7photoPrompt">Continue</Link>
    </View>
  );
}
