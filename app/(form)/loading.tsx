import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useContext, useState } from "react";
import { FormDataContext } from "@/components/FormDataContext";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
// import LoadingSpinner from "@/components/ui/LoadingSpinner"; // Adjust import path
import { Bold } from "lucide-react-native";

export default function LoadingScreen() {
  const router = useRouter();
  const formData = useContext(FormDataContext);
  const [estimateGenerated, setEstimateGenerated] = useState(false);
  const [estimate, setEstimate] = useState<any>(null);

  console.log("Input data:", formData);

  const testGPT = useAction(api.openai.testOpenAi);

  const generateEstimate = useAction(api.openai.generateEstimate);
  useEffect(() => {
    // Access form data here
    // console.log("Form data:", formData);

    // const results = testGPT({ image: formData.photoBase64! });
    // console.log("Results:", results);
    const generateAndNavigate = async () => {
      try {
        const estimate = await generateEstimate({
          roomType: formData.roomType,
          roomWidth: formData.roomWidth,
          roomLength: formData.roomLength,
          usedMaterials: formData.usedMaterials,
          address: formData.address,
          zipcode: formData.zipcode.toString(),
          estimatedTimeFrame: formData.timeframe,
          photo: formData.photoBase64!,
          projectDescription: formData.projectDescription,
        });

        console.log("Estimate:", estimate);
        setEstimate(estimate);

        setEstimateGenerated(true);
      } catch (error) {
        console.error("Error generating estimate:", error);
      }
    };

    generateAndNavigate();
  }, [formData, generateEstimate, router]);

  if (estimateGenerated) {
    return <EstimateScreen estimate={estimate} />;
  }

  return (
    <View style={styles.container}>
      {/* <LoadingSpinner /> */}
      <Text style={styles.loadingText}>Generating your Estimate…</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0BB8", // Solid blue background
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 20,
    color: "#FFFFFF",
    fontSize: 20,
  },
});

const EstimateScreen = ({ estimate }: { estimate: any }) => {
  return (
    <ScrollView className="p-4 pt-10">
      <Text className="font-bold text-2xl py-8">Estimated Total: $8,000.00</Text>
      {estimate.tasks_list.map((task: any, index: number) => (
        <View key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Text className="text-xl font-bold mb-2">{task.task_name}</Text>
          <Text className="text-gray-600 mb-4">{task.task_description}</Text>

          {/* Sub Tasks */}
          <View className="mb-4">
            <Text className="text-lg font-semibold mb-2">Sub Tasks:</Text>
            {task.sub_tasks.map((subTask: any, subIndex: number) => (
              <View key={subIndex} className="ml-4 mb-2">
                <Text className="font-medium">{subTask.sub_task_name}</Text>
                <Text className="text-gray-500">{subTask.sub_task_description}</Text>
              </View>
            ))}
          </View>

          {/* Materials */}
          {task.task_materials && (
            <View>
              <Text className="text-lg font-semibold mb-2">Materials Needed:</Text>
              {task.task_materials.map((material: any, matIndex: number) => (
                <View key={matIndex} className="ml-4 mb-1">
                  <Text>
                    {material.material_name} - {material.material_quantity} units at ${material.material_unit_price}/unit
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};
