import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { FormDataContext } from "@/components/FormDataContext";

export default function EstimateScreen() {
  const formData = useContext(FormDataContext);
  
  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">Your Project Estimate</Text>
      
      <View className="bg-white p-4 rounded-lg shadow-md mb-4">
        <Text className="text-lg font-semibold mb-2">Project Details</Text>
        <Text>Room Type: {formData.roomType}</Text>
        <Text>Dimensions: {formData.roomWidth} x {formData.roomLength} ft</Text>
        <Text>Description: {formData.projectDescription}</Text>
      </View>
      
      <View className="bg-white p-4 rounded-lg shadow-md mb-4">
        <Text className="text-lg font-semibold mb-2">Materials</Text>
        <Text>Selected Materials: {formData.usedMaterials.join(", ")}</Text>
      </View>
      
      <View className="bg-white p-4 rounded-lg shadow-md mb-4">
        <Text className="text-lg font-semibold mb-2">Location & Timeline</Text>
        <Text>Address: {formData.address}</Text>
        <Text>Zipcode: {formData.zipcode}</Text>
        <Text>Timeframe: {formData.timeframe}</Text>
      </View>
      
      <Link href="/" className="bg-blue-500 p-3 rounded-lg items-center mt-4">
        <Text className="text-white text-center font-semibold">Share Estimate</Text>
      </Link>
    </ScrollView>
  );
}
