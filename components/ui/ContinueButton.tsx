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
    backgroundColor: "#3B82F6", // Equivalent to bg-blue-500
    paddingHorizontal: 16, // Equivalent to px-4
    paddingVertical: 8, // Equivalent to py-2
    borderRadius: 8, // Equivalent to rounded-lg
  },
  text: {
    color: "#fff", // text-white
    fontWeight: "600", // font-semibold
    textAlign: "center", // text-center
  },
});
