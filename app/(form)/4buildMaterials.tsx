import React, { useContext, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";
import ProgressBar from "@/components/ui/ProgressBar";
import CheckboxList from "@/components/ui/CheckboxList";
import { FormDataContext } from "@/components/FormDataContext";
import BackButton from "@/components/ui/BackButton";
import ContinueButton from "@/components/ui/ContinueButton";
import OnboardingInputTemplate from "@/components/screens/OnboardingInputTemplate";

export default function BuildMaterialsScreen() {
  const { usedMaterials, setUsedMaterials } = useContext(FormDataContext);
  const [testingTemplate, setTestingTemplate] = useState(true);

  // Array of potential materials provided by the screen.
  const potentialMaterials = [
    "Ceramic Tile",
    "Wood Paneling",
    "Carpet",
    "Plaster",
    "Marble",
    "Concrete Blocks (CMU)",
    "Brick",
    "Glass",
  ];

  const handleToggleMaterial = (item: string, newValue: boolean) => {
    if (newValue) {
      if (!usedMaterials.includes(item)) {
        setUsedMaterials([...usedMaterials, item]);
      }
    } else {
      setUsedMaterials(usedMaterials.filter((m) => m !== item));
    }
  };

  if (testingTemplate) {
    return (
      <OnboardingInputTemplate progressLevel={3} continueHref="/(form)/5addrTime" backButtonPresent={true} backHref="/(form)/3projDesc">
        <View className="px-10">
          <Text className="text-3xl font-bold">Building Materials</Text>
          <Text className="text-lg leading-5 pt-4">Choose the materials needed for your project. Select all that apply.</Text>
            <CheckboxList
              items={potentialMaterials}
              selectedItems={usedMaterials}
              onToggle={handleToggleMaterial}
            />
        </View>
      </OnboardingInputTemplate>
    )
  }

  return (
    <View style={styles.screen}>
      {/* Progress bar at the top */}
      <ProgressBar currentStep={3} />

      <BackButton />

      {/* Scrollable content area */}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Title */}
        <Text style={styles.title}>Building Materials</Text>

        {/* Instruction text */}
        <Text style={styles.instruction}>
          Choose the materials needed for this project. Select all that apply.
        </Text>

        {/* Checkbox list */}
        <CheckboxList
          items={potentialMaterials}
          selectedItems={usedMaterials}
          onToggle={handleToggleMaterial}
        />
      </ScrollView>

      {/* Bottom-aligned Continue button */}
      <View style={styles.bottomContainer}>
        <ContinueButton nextLink="/(form)/5addrTime" buttonText="Continue" />
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
  // Smaller instruction text
  instruction: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
    lineHeight: 20,
  },
  // Container for the "Other" input
  otherContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  otherLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  otherInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
    fontSize: 16,
    paddingVertical: 2,
  },
  // Bottom container for Continue button
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
