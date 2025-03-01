import React, { ReactNode } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export const MenuOption = ({
  onSelect,
  children,
}: {
  onSelect: () => void;
  children: ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.menuOption}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuOption: {
    padding: 5,
  },
});
