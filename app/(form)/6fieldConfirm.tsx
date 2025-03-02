import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProgressBar from "@/components/ui/ProgressBar";
import { FormDataContext } from "@/components/ui/FormDataContext";
import BackButton from "@/components/ui/BackButton";
import MultiBackButton from "@/components/ui/MultiBackButton";
import ContinueButton from "@/components/ui/ContinueButton";

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
