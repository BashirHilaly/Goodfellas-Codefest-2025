import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type NumberFormProps = {
  promptText?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function NumberForm({
  promptText = "Enter a number:",
  value,
  onChangeText,
}: NumberFormProps) {
  const [internalValue, setInternalValue] = useState("");

  const handleChangeText = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    } else {
      setInternalValue(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{promptText}</Text>
      <TextInput
        style={styles.input}
        value={value !== undefined ? value : internalValue}
        onChangeText={handleChangeText}
        placeholder="e.g., 42"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
