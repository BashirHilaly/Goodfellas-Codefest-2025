import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";
import CheckboxList from "@/components/ui/CheckboxList";
import { FormDataContext } from "@/components/FormDataContext";
import BackButton from "@/components/ui/BackButton";
import ContinueButton from "@/components/ui/ContinueButton";

export default function BuildMaterialsScreen() {
  const { usedMaterials, setUsedMaterials } = useContext(FormDataContext);

  // Array of potential materials provided by the screen.
  const potentialMaterials = ["wood", "concrete", "steel", "glass", "bricks"];

  const handleToggleMaterial = (item: string, newValue: boolean) => {
    if (newValue) {
      if (!usedMaterials.includes(item)) {
        setUsedMaterials([...usedMaterials, item]);
      }
    } else {
      setUsedMaterials(usedMaterials.filter((m) => m !== item));
    }
  };
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
