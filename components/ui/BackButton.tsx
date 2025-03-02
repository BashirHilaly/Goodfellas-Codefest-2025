import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} onPress={() => router.back()}>
      <View style={styles.contentRow}>
        <Text style={styles.arrow}>←</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: 50,
    height: 60,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
