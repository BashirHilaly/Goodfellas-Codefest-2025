import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useContext } from "react";
import { FormDataContext } from "@/components/ui/FormDataContext";

export default function LoadingScreen() {
  const router = useRouter();
  const formData = useContext(FormDataContext);

  useEffect(() => {
    // Access form data here
    console.log("Form data:", formData);
    const inputData = {
      roomType: formData.roomType,
      roomWidth: formData.roomWidth,
      roomLength: formData.roomLength,
      projectDescription: formData.projectDescription,
      buildMaterials: formData.usedMaterials,
    }

    console.log("Input data:", inputData);
    
    // Set a timer to navigate to the Info Screen after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/(output)/estimate");
    }, 3000);

    // Cleanup the timer if the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View>
      <Text className="text-green-500">
        Hello! I am currently loading your data into the AI model. Please wait
        until it is done.
      </Text>
    </View>
  );
}
