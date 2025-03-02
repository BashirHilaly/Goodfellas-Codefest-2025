import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";
import CheckboxList from "@/components/ui/CheckboxList";
import { FormDataContext } from "@/components/ui/FormDataContext";

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
      <Text className="text-6xl">Building Materials</Text>
      <CheckboxList
        items={potentialMaterials}
        selectedItems={usedMaterials}
        onToggle={handleToggleMaterial}
      />
      <Link href="/(form)/5addrTime">Continue</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginVertical: 20,
  },
});
