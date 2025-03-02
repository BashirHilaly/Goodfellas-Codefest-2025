import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type DescriptionFieldProps = {
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function DescriptionField({
  value = "",
  onChangeText,
}: DescriptionFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter your description..."
        multiline
        numberOfLines={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // ensures text starts at the top on Android
  },
});
