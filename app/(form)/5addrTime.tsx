import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function AddrTimeScreen() {
  return (
    <View>
      <Text className="text-red-500">
        Here you put the address of the place and the time schedule
      </Text>
      <Link href="/(form)/6fieldConfirm">Continue</Link>
    </View>
  );
}
