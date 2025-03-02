import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState, useContext } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";
import { FormDataContext } from "../FormDataContext";

const TestCamera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView | null>(null);
  const router = useRouter();
  const { setPhotoUri } = useContext(FormDataContext);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <SafeAreaView>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </SafeAreaView>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const result = await cameraRef.current.takePictureAsync({
          base64: true,
          quality: 0.7,
        });

        if (result) {
          setPhoto(result.uri);

          // Save to local filesystem
          const filename = `photo-${Date.now()}.jpg`;
          const destination = `${FileSystem.documentDirectory}${filename}`;
          await FileSystem.copyAsync({
            from: result.uri,
            to: destination,
          });

          if (result.base64) {
            console.log(
              "Image captured in base64 format, ready to send to backend"
            );
          }

          // save the photo do the app globally
          setPhotoUri(result.uri);

          // Navigate straight to the 9imageConfirm screen after taking the photo
          router.push("/9imageConfirm");
        }
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePicture} style={styles.outerRing}>
            <View style={styles.button}></View>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default TestCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  // Positions the outer ring at the bottom center with margin from the bottom
  buttonContainer: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  // The outer ring: a slightly larger circle with a thin border
  outerRing: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "rgba(4, 4, 72, 0.6)", // thin white ring, adjust color as needed
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  // The main button: a large opaque circle
  button: {
    backgroundColor: "rgba(4, 4, 72, 0.9)",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});