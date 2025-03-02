import React, { useContext, useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import ProgressBar from "@/components/ui/ProgressBar";
import DescriptionField from "@/components/ui/DescriptionField";
import { FormDataContext } from "@/components/FormDataContext";
import BackButton from "@/components/ui/BackButton";
import ContinueButton from "@/components/ui/ContinueButton";
import OnboardingInputTemplate from "@/components/screens/OnboardingInputTemplate";

export default function ProjDescScreen() {
  const { projectDescription, setProjectDescription } =
    useContext(FormDataContext);

  const [testingTemplate, setTestingTemplate] = useState(true);
  
  if (testingTemplate) {
    return (
      <OnboardingInputTemplate progressLevel={2} continueHref="/(form)/4buildMaterials" backButtonPresent={true} backHref="/(form)/2roomDetails">
        <View className="px-10">
          <Text className="text-3xl font-bold pt-16">Project Description</Text>
          <View className="">
            <Text className="text-lg leading-5 pt-4">Provide key details about your project, such as type of work needed, special requirements, or existing conditions.</Text>
          </View>

          <View className="pt-10">
            <Text className="text-lg italic text-gray-600">Example:</Text>
            <Text className="text-lg italic text-gray-600 leading-5">'Install porcelain tile in a 12x10 kitchen, remove old flooring, and include grout and underlayment.'</Text>
          </View>

          <View className="pt-10">
            <Text className="text-lg font-semibold leading-5">The more details you give, the better your estimate will be!</Text>
          </View>

          <DescriptionField
            value={projectDescription}
            onChangeText={(text: string) => {
              // Limit to 500 characters if desired
              if (text.length <= 500) setProjectDescription(text);
            }}
            placeholder="Enter Description here..."
          />

        </View>
      </OnboardingInputTemplate>
    )
  }

  return (
    <View style={styles.screen}>
      {/* Progress Bar at the top */}
      <ProgressBar currentStep={2} />

      <BackButton />

      {/* Main content area */}
      <View style={styles.contentContainer}>
        {/* Scrollable area for instructions and description field */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Project Description</Text>

          <Text style={styles.instruction}>
            Provide key details about your project, such as type of work needed,
            special requirements, or existing conditions.
          </Text>
          <Text style={styles.instructionLabel}>Example:</Text>
          <Text style={styles.example}>
            'Install porcelain tile in a 12x10 kitchen, remove old flooring, and
            include grout and underlayment.'
          </Text>
          <Text style={styles.instruction}>
            The more details you give, the better your estimate will be!
          </Text>

          <DescriptionField
            value={projectDescription}
            onChangeText={(text: string) => {
              // Limit to 300 characters if desired
              if (text.length <= 300) setProjectDescription(text);
            }}
            placeholder="Enter Description here..."
          />

          <Text style={styles.charCount}>
            {projectDescription.length}/300 characters
          </Text>
        </ScrollView>

        {/* Bottom area for the Continue button */}
        <View style={styles.bottomContainer}>
          <ContinueButton
            nextLink="/(form)/4buildMaterials"
            buttonText="Continue"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
    lineHeight: 22,
  },
  instructionLabel: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
  },
  example: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
    marginBottom: 10,
    lineHeight: 22,
  },
  charCount: {
    alignSelf: "flex-end",
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
