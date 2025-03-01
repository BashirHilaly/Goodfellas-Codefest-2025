import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function ImageConfirmScreen() {
  return (
    <View>
      <Text className="text-red-500">You will confirm the image here</Text>
      <Link href="/(form)/8camera" replace>
        Retake
      </Link>
      <Link href="/(output)/loading" replace>
        Confirm
      </Link>
    </View>
  );
}
