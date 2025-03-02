import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export type MultiBackButtonProps = {
  num: number;
};

export default function MultiBackButton({ num }: MultiBackButtonProps) {
  // Use "any" here to bypass the type issue, or provide a proper type if available.
  const navigation = useNavigation<any>();

  const handleMultiBack = () => {
    navigation.pop(num);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleMultiBack}>
      <Text style={styles.buttonText}>Edit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
