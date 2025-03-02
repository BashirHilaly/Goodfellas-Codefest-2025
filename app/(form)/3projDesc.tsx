import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import ProgressBar from "@/components/ui/ProgressBar";
import DescriptionField from "@/components/ui/DescriptionField";
import { FormDataContext } from "@/components/ui/FormDataContext";

export default function ProjDescScreen() {
  const { projectDescription, setProjectDescription } =
    useContext(FormDataContext);

  return (
    <View>
      <ProgressBar currentStep={2} />
      <Text className="text-6xl">Project Description</Text>
      <DescriptionField
        value={projectDescription}
        onChangeText={(text: string) => setProjectDescription(text)}
      />
      <Link href="/(form)/4buildMaterials">Continue</Link>
    </View>
  );
}
