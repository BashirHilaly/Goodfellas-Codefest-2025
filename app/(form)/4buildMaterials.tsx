import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function BuildMaterialsScreen() {
  return (
    <View>
      <Text className="text-red-500">
        Here you list the materials your client has requested
      </Text>
      <Link href="/(form)/5addrTime">Continue</Link>
    </View>
  );
}
