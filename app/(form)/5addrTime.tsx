import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ProgressBar from "@/components/ui/ProgressBar";
import { FormDataContext, Timeframe } from "@/components/FormDataContext";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { MenuOption } from "@/components/ui/MenuOption";
import NumberForm from "@/components/ui/NumberForm";
import TextForm from "@/components/ui/TextForm";
import BackButton from "@/components/ui/BackButton";
import ContinueButton from "@/components/ui/ContinueButton";

export default function AddrTimeScreen() {
  const { address, setAddress, zipcode, setZipcode, timeframe, setTimeframe } =
    useContext(FormDataContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // An array to cycle through room types.
  const timeframes: Timeframe[] = [
    "Within 1-2 Weeks",
    "1 Month",
    "2 Months",
    "3 Months",
    "6 Months",
    "1 Year",
  ];

  const handleSelectTimeframe = (selected: Timeframe) => {
    setTimeframe(selected);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.screen}>
      {/* Progress bar at the top */}
      <ProgressBar currentStep={4} />

      <BackButton />

      {/* Scrollable content area */}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Title */}
        <Text style={styles.title}>Address & Timeframe</Text>

        {/* Instruction text */}
        <Text style={styles.instruction}>
          Enter the project address to get location-based pricing and choose an
          estimated timeframe.
        </Text>

        {/* Address field */}
        <View style={styles.textContainer}>
          <Text style={styles.instructionLabel}>Address</Text>
          <TextForm
            placeholder="Apartment, suite, etc."
            value={address}
            onChangeText={(text: string) => setAddress(text)}
          />
        </View>

        {/* ZIP Code field */}
        <View style={styles.textContainer}>
          <Text style={styles.instructionLabel}>ZIP Code</Text>
          <NumberForm
            placeholder="e.g. 19343"
            value={zipcode.toString()}
            onChangeText={(text: string) => setZipcode(Number(text))}
          />
        </View>

        {/* Timeframe dropdown */}
        <View style={styles.outerDropdownContainer}>
          <Text style={styles.instructionLabel}>Timeframe</Text>
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
                  <Text style={styles.triggerText}>{timeframe}</Text>
                  <Text style={styles.caret}>▼</Text>
                </TouchableOpacity>
              }
            >
              {timeframes.map((time, index) => (
                <MenuOption
                  key={index}
                  onSelect={() => handleSelectTimeframe(time)}
                >
                  <Text>{time}</Text>
                </MenuOption>
              ))}
            </DropdownMenu>
          </View>
        </View>
      </ScrollView>

      {/* Bottom-aligned Continue button */}
      <View style={styles.bottomContainer}>
        <ContinueButton
          nextLink="/(form)/6fieldConfirm"
          buttonText="Continue"
        />
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
  textContainer: {
    marginTop: 10,
    marginBottom: 20,
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
  // Smaller instruction text
  instruction: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    lineHeight: 20,
  },
  // Field label
  instructionLabel: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  outerDropdownContainer: {
    marginTop: 50,
  },
  // Dropdown styling
  dropdownContainer: {
    marginBottom: 20,
    padding: 20,
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
  // Bottom container for Continue button
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
