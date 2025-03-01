import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TestCamera = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
  
    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <SafeAreaView>
          <Text>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </SafeAreaView>
      );
    }
  
    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  
    return (
      <SafeAreaView>
        <CameraView facing={facing}>
          <View >
            <TouchableOpacity onPress={toggleCameraFacing}>
              <Text>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </SafeAreaView>
    );
}

export default TestCamera