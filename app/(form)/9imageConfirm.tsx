import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ContinueButton from "@/components/ui/ContinueButton";
import BackButton from "@/components/ui/BackButton";
import { FormDataContext } from "@/components/FormDataContext";

export default function ImageConfirmScreen() {
  const { photoUri } = useContext(FormDataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Your Photo</Text>
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.image} />
      ) : (
        <Text style={styles.noImageText}>No image available</Text>
      )}
      <BackButton buttonText="Retake" />
      <ContinueButton nextLink="/(output)/loading" buttonText="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 20,
    borderRadius: 8,
  },
  noImageText: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
});
