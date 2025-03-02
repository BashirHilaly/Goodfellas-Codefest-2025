import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProgressBar from "@/components/ui/ProgressBar";
import { FormDataContext } from "@/components/FormDataContext";
import BackButton from "@/components/ui/BackButton";
import MultiBackButton from "@/components/ui/MultiBackButton";
import ContinueButton from "@/components/ui/ContinueButton";
import OnboardingInputTemplate from "@/components/screens/OnboardingInputTemplate";

export default function fieldConfirmScreen() {
  const {
    projectDescription,
    roomType,
    roomWidth,
    roomLength,
    usedMaterials,
    address,
    zipcode,
    timeframe,
  } = useContext(FormDataContext);

  const [testingTemplate, setTestingTemplate] = useState(true);

  if (testingTemplate) {
    return (
      <OnboardingInputTemplate progressLevel={5} continueHref="/(form)/7photoPrompt" backButtonPresent={true} backHref="/(form)/5addrTime">
        <ScrollView className="px-10">
          <Text className="text-3xl font-bold pt-8">Confirm Inputs</Text>
          {/* Project Description */}
          <View className="pt-4">
            <Text className="text-xl font-semibold">Project Description</Text>
            <Text className="text-base pt-1">{projectDescription || "-"}</Text>
          </View>

          {/* Room Details */}
          <View className="pt-6">
            <Text className="text-xl font-semibold">Room Details</Text>
            <View className="pt-1">
              <Text className="text-base">Room Type: {roomType}</Text>
              <Text className="text-base">Dimensions: {roomWidth} ft x {roomLength} ft</Text>
            </View>
          </View>

          {/* Building Materials */}
          <View className="pt-6">
            <Text className="text-xl font-semibold">Building Materials</Text>
            <Text className="text-base pt-1">
              {usedMaterials.length > 0 ? usedMaterials.join(", ") : "-"}
            </Text>
          </View>

          {/* Location & Timeline */}
          <View className="pt-6 pb-8">
            <Text className="text-xl font-semibold">Location & Timeline</Text>
            <View className="pt-1">
              <Text className="text-base">Address: {address || "-"}</Text>
              <Text className="text-base">Zipcode: {zipcode || "-"}</Text>
              <Text className="text-base">Timeframe: {timeframe}</Text>
            </View>
          </View>
        </ScrollView>
      </OnboardingInputTemplate>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProgressBar currentStep={4} />
      <BackButton></BackButton>
      <Text style={styles.title}>Confirm Inputs</Text>
      {/* Project Description Group */}
      <View style={styles.groupContainer}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupTitle}>Project Description</Text>
          <MultiBackButton num={3}></MultiBackButton>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldValue}>{projectDescription || "-"}</Text>
        </View>
      </View>
      {/* Room & Dimensions Group */}
      <View style={styles.groupContainer}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupTitle}>Room & Dimensions</Text>
          <MultiBackButton num={4}></MultiBackButton>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Room Type:</Text>
          <Text style={styles.fieldValue}>{roomType}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Room Dimensions:</Text>
          <Text style={styles.fieldValue}>
            {roomWidth} ft x {roomLength} ft
          </Text>
        </View>
      </View>
      {/* Selected Building Materials Group */}
      <View style={styles.groupContainer}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupTitle}>Selected Building Materials</Text>
          <MultiBackButton num={2}></MultiBackButton>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldValue}>
            {usedMaterials.length > 0 ? usedMaterials.join(", ") : "-"}
          </Text>
        </View>
      </View>
      {/* Project Location & Timeframe Group */}
      <View style={styles.groupContainer}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupTitle}>Project Location & Timeframe</Text>
          <MultiBackButton num={1}></MultiBackButton>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Address:</Text>
          <Text style={styles.fieldValue}>{address || "-"}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Zipcode:</Text>
          <Text style={styles.fieldValue}>{zipcode || "-"}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Timeframe:</Text>
          <Text style={styles.fieldValue}>{timeframe}</Text>
        </View>
      </View>
      <ContinueButton nextLink="/(form)/7photoPrompt" buttonText="Continue" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  groupContainer: {
    marginBottom: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editButton: {
    fontSize: 16,
    color: "blue",
  },
  fieldContainer: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fieldValue: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 4,
  },
  continueLink: {
    marginTop: 30,
    fontSize: 18,
    color: "blue",
  },
});
