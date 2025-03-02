import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

export type BackButtonProps = {
  buttonText?: string;
};

export default function BackButton({ buttonText }: BackButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} onPress={() => router.back()}>
      <View style={styles.contentRow}>
        <Text style={styles.arrow}>←</Text>
        {buttonText && <Text style={styles.buttonText}></Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
