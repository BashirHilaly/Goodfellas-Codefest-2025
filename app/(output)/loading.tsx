import { Image, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useContext } from "react";
import { FormDataContext } from "@/components/FormDataContext";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function LoadingScreen() {
  const router = useRouter();
  const {
    projectDescription,
    roomType,
    roomWidth,
    roomLength,
    usedMaterials,
    address,
    zipcode,
    timeframe,
    photoUri,
  } = useContext(FormDataContext);



  console.log("Input data:", projectDescription);

  const testGPT = useAction(api.openai.testOpenAi);

  // useEffect(() => {
  //   // Access form data here
  //   // console.log("Form data:", formData);

  //   console.log("Input data:", inputData);

  //   const results = testGPT({ image: inputData.photoUri! });
  //   console.log("Results:", results);
    
    
  //   // Set a timer to navigate to the Info Screen after 3 seconds
  //   const timer = setTimeout(() => {
  //     router.replace("/(output)/estimate");
  //   }, 3000);

  //   // Cleanup the timer if the component unmounts before the timer ends
  //   return () => clearTimeout(timer);
  // }, [router]);

  return (
    <View>
      <Text className="text-green-500">
        Hello! I am currently loading your data into the AI model. Please wait
        until it is done.
      </Text>
    </View>
  );
}
