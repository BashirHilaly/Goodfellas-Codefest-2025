import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "@/components/ui/ProgressBar";
import ContinueButton from "@/components/ui/ContinueButton";
import BackButton from "@/components/ui/BackButton";

export default function PhotoPromptScreen() {
  return (
    <View style={styles.container}>
      {/* Progress Bar at the top */}
      <ProgressBar currentStep={5} />

      {/* Back Button aligned to the left */}
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>

      {/* Title */}
      <Text style={styles.title}>Capture Project Area</Text>

      {/* Instructions */}
      <Text style={styles.instruction}>
        Ensure the entire project area is visible in the frame. Stand far enough
        to capture walls, floors, and surrounding space.
      </Text>
      <Text style={styles.instruction}>
        Take the photo in good lighting for better detection.
      </Text>
      <Text style={styles.instruction}>
        Clear out furniture or objects that obstruct the view.
      </Text>
      <Text style={styles.instruction}>
        Download or send your estimate to clients or team members.
      </Text>

      {/* Continue Button at the bottom */}
      <View style={styles.bottomContainer}>
        <ContinueButton nextLink="/(form)/8camera" buttonText="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButtonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    color: "#000",
  },
  bottomContainer: {
    marginTop: "auto", // pushes this section to the bottom
    marginBottom: 30,
  },
});
