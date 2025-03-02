import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ProgressBar from "@/components/ui/ProgressBar";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { MenuOption } from "@/components/ui/MenuOption";
import NumberForm from "@/components/ui/NumberForm";
import { FormDataContext, RoomType } from "@/components/FormDataContext";
import BackButton from "@/components/ui/BackButton";
import OnboardingInputTemplate from "@/components/screens/OnboardingInputTemplate";
import ContinueButton from "@/components/ui/ContinueButton";

export default function RoomDetailsScreen() {
  const {
    roomType,
    setRoomType,
    roomWidth,
    setRoomWidth,
    roomLength,
    setRoomLength,
  } = useContext(FormDataContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [testingTemplate, setTestingTemplate] = useState(true);
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
    <View style={styles.screen}>
      {/* Progress bar at the top */}
      <ProgressBar currentStep={1} />

      <BackButton />

      {/* Scrollable content area */}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Title */}
        <Text style={styles.title}>Room Details</Text>

        {/* Room Type */}
        <Text style={styles.instructionLabel}>Room Type</Text>
        <View style={styles.dropdownContainer}>
          <DropdownMenu
            visible={dropdownVisible}
            handleOpen={() => setDropdownVisible(true)}
            handleClose={() => setDropdownVisible(false)}
            trigger={
              <TouchableOpacity
                style={styles.dropdownTrigger}
                onPress={() => setDropdownVisible(true)}
              >
                <Text style={styles.triggerText}>{roomType}</Text>
                <Text style={styles.caret}>▼</Text>
              </TouchableOpacity>
            }
          >
            {roomTypes.map((type, index) => (
              <MenuOption key={index} onSelect={() => handleSelectRoom(type)}>
                <Text>{type}</Text>
              </MenuOption>
            ))}
          </DropdownMenu>
        </View>

        {/* Room Dimensions */}
        <Text style={[styles.instructionLabel, { marginTop: 20 }]}>
          Room Dimensions
        </Text>
        <Text style={styles.instruction}>
          Measure the longest width and length of the space in feet
        </Text>
        <View style={styles.dimensionsRow}>
          <View style={styles.dimensionBox}>
            <NumberForm
              promptText="W"
              placeholder="Width"
              value={roomWidth.toString()}
              onChangeText={(text: string) => setRoomWidth(Number(text))}
            />
          </View>
          <Text style={styles.multiplySign}>x</Text>
          <View style={styles.dimensionBox}>
            <NumberForm
              promptText="L"
              placeholder="Length"
              value={roomLength.toString()}
              onChangeText={(text: string) => setRoomLength(Number(text))}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom-aligned Continue button */}
      <View style={styles.bottomContainer}>
        <ContinueButton nextLink="/(form)/3projDesc" buttonText="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main screen container
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Container for the back button
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  // Scrollable content
  contentContainer: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  // Title
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  // Sub-headings or field labels
  instructionLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  // Smaller instruction text
  instruction: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    lineHeight: 20,
  },
  // Dropdown styling
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownTrigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  triggerText: {
    fontSize: 16,
  },
  caret: {
    fontSize: 14,
    marginLeft: 8,
    color: "#999",
  },
  // Dimensions row
  dimensionsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dimensionBox: {
    flex: 1,
  },
  multiplySign: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  // Bottom container for Continue button
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
