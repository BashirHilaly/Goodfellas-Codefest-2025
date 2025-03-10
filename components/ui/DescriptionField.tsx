import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type DescriptionFieldProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};

export default function DescriptionField({
  value = "",
  onChangeText,
  placeholder = "Enter your description...",
}: DescriptionFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline
        numberOfLines={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 180,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // ensures text starts at the top on Android
    borderRadius: 10,
  },
});
