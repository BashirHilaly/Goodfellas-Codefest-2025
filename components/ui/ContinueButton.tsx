import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export type ContinueButtonProps = {
  nextLink: string;
  buttonText?: string;
};

export default function ContinueButton({
  nextLink,
  buttonText = "Continue",
}: ContinueButtonProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(nextLink as any);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%", // Make the button a bit wider
    height: 70,
    backgroundColor: "#000",
    paddingVertical: 15, // More vertical padding
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
});
