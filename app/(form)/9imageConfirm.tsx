import React, { useContext } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import ContinueButton from "@/components/ui/ContinueButton";
import BackButton from "@/components/ui/BackButton";
import { FormDataContext } from "@/components/FormDataContext";

export default function ImageConfirmScreen() {
  const { photoUri } = useContext(FormDataContext);

  return (
    <View style={styles.container}>
      {/* Top area for the image */}
      <View style={styles.imageContainer}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.image} />
        ) : (
          <Text style={styles.noImageText}>No image available</Text>
        )}
      </View>

      {/* Bottom area for text and buttons */}
      <View style={styles.outerBottomContainer}>
        <Text style={styles.title}>Confirm Your Photo:</Text>
        <View style={styles.bottomContainer}>
          {/* Primary action */}
          <ContinueButton
            nextLink="/(output)/loading"
            buttonText="Generate Estimate"
          />

          {/* Spacing between the two buttons */}
          <View style={{ height: 10 }} />

          {/* Secondary action */}
          <BackButton buttonText="Retake Photo" />
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: height * 0.73, // Top 60% of the screen
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  noImageText: {
    fontSize: 16,
    color: "gray",
    marginTop: 20,
    textAlign: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerBottomContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "left",
  },
});
