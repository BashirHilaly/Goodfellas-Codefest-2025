import React, { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";
import { FormDataContext } from "@/components/ui/FormDataContext";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { MenuOption } from "@/components/ui/MenuOption";

export type Timeframe =
  | "Within 1-2 Weeks"
  | "1 Month"
  | "2 Months"
  | "3 Months"
  | "6 Months"
  | "1 Year";

export default function AddrTimeScreen() {
  const { timeframe, setTimeframe } = useContext(FormDataContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // An array to cycle through room types.
  const timeframes: Timeframe[] = ["Within 1-2 Weeks"];

  const handleSelectRoom = (selected: Timeframe) => {
    setTimeframe(selected);
    setDropdownVisible(false);
  };

  return (
    <View>
      <ProgressBar currentStep={4}></ProgressBar>
      <Text className="text-6xl">Address & Timeframe</Text>
      <Text className="text-3xl">Address</Text>
      <Text className="text-3xl">Timeframe</Text>
      <DropdownMenu
        visible={dropdownVisible}
        handleOpen={() => setDropdownVisible(true)}
        handleClose={() => setDropdownVisible(false)}
        trigger={
          <View style={styles.triggerStyle}>
            <Text style={styles.triggerText}>{timeframe}</Text>
          </View>
        }
      >
        {timeframes.map((type, index) => (
          <MenuOption key={index} onSelect={() => handleSelectRoom(type)}>
            <Text>{type}</Text>
          </MenuOption>
        ))}
      </DropdownMenu>
      <Link href="/(form)/6fieldConfirm">Continue</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  triggerStyle: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  triggerText: {
    fontSize: 16,
  },
});
