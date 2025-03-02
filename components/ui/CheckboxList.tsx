// CheckboxList.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

export type CheckboxListProps = {
  items: string[];
  selectedItems: string[];
  onToggle: (item: string, newValue: boolean) => void;
};

export default function CheckboxList({
  items,
  selectedItems,
  onToggle,
}: CheckboxListProps) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const isSelected = selectedItems.includes(item);
        return (
          <View key={index} style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isSelected}
              onValueChange={(newValue) => onToggle(item, newValue)}
              color={isSelected ? "#4630EB" : undefined}
            />
            <Text style={styles.paragraph}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
