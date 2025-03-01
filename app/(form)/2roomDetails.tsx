import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { MenuOption } from "@/components/ui/MenuOption";
import NumberForm from "@/components/ui/NumberForm";

type RoomType =
  | "Kitchen"
  | "Bathroom"
  | "Bedroom"
  | "Livingroom"
  | "Garage"
  | "Basement"
  | "Attic"
  | "Hallway"
  | "Dining room"
  | "Closet"
  | "Laundry Room"
  | "Guest room"
  | "Home Office";

export default function RoomDetailsScreen() {
  const [roomType, setRoomType] = useState<RoomType>("Kitchen");
  const [surfaceArea, setSurfaceArea] = useState(0);
  const [wallHeight, setwallHeight] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // An array to cycle through room types.
  const roomTypes: RoomType[] = [
    "Kitchen",
    "Bathroom",
    "Bedroom",
    "Livingroom",
    "Garage",
    "Basement",
    "Attic",
    "Hallway",
    "Dining room",
    "Closet",
    "Laundry Room",
    "Guest room",
    "Home Office",
  ];

  const handleSelectRoom = (selected: RoomType) => {
    setRoomType(selected);
    setDropdownVisible(false);
  };

  return (
    <View className="flex-1">
      <ProgressBar currentStep={1}></ProgressBar>
      <Text className="text-6xl">Room Details</Text>
      {/* For the room type */}
      <Text className="text-3xl">Room Type</Text>
      <View className="mt-8 items-center">
        <Text className="text-lg mb-2">Selected Room Type: {roomType}</Text>
        <DropdownMenu
          visible={dropdownVisible}
          handleOpen={() => setDropdownVisible(true)}
          handleClose={() => setDropdownVisible(false)}
          trigger={
            <View style={styles.triggerStyle}>
              <Text style={styles.triggerText}>Select Room Type</Text>
            </View>
          }
        >
          {roomTypes.map((type, index) => (
            <MenuOption key={index} onSelect={() => handleSelectRoom(type)}>
              <Text>{type}</Text>
            </MenuOption>
          ))}
        </DropdownMenu>
      </View>

      {/* For the room type */}
      <Text className="text-3xl">Room Dimensions</Text>
      <NumberForm
        promptText="Floor Area (ft^2)"
        value={surfaceArea.toString()}
        onChangeText={(text: String) => setSurfaceArea(Number(text))}
      ></NumberForm>
      <NumberForm
        promptText="Wall Height (ft)"
        value={wallHeight.toString()}
        onChangeText={(text: String) => setwallHeight(Number(text))}
      ></NumberForm>
      <Link href="/(form)/3projDesc">Continue</Link>
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
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  triggerText: {
    fontSize: 16,
  },
});
