import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type TextFormProps = {
  promptText?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};

export default function TextForm({
  promptText = "",
  value,
  onChangeText,
  placeholder = "Enter text here",
}: TextFormProps) {
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
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
