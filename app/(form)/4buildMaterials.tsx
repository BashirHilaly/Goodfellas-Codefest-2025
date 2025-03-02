import React, { useContext, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
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
  const potentialMaterials = ["wood", "concrete", "steel", "glass", "bricks", "ceramic", "tile", "marble", "granite"];

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
    <View>
      <ProgressBar currentStep={3}></ProgressBar>
      <BackButton></BackButton>
      <Text className="text-6xl">Building Materials</Text>
      <CheckboxList
        items={potentialMaterials}
        selectedItems={usedMaterials}
        onToggle={handleToggleMaterial}
      />
      <ContinueButton nextLink="/(form)/5addrTime" buttonText="Continue" />
    </View>
  );
}
