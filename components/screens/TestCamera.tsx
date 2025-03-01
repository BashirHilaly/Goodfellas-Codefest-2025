import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';

const TestCamera = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState<string | null>(null);
    const cameraRef = useRef<CameraView | null>(null);
  
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
              to: destination
            });
            
            if (result.base64) {
              // Here you can call your Convex mutation with the base64 data
              // For example:
              // await mutate.yourConvexFunction({ 
              //   imageData: result.base64,
              //   filename: filename
              // });
              
              console.log('Image captured in base64 format, ready to send to backend');
            }
          }
        } catch (error) {
          console.error('Error taking picture:', error);
        }
      }
    };
  
    return (
      <View className="flex-1 bg-blue-300">
        <CameraView 
          ref={cameraRef}
          className="flex-1 w-full h-full" 
          facing={facing}
        >
          <View className="flex-row justify-around h-96">
            <TouchableOpacity 
              className="bg-black/60 p-4 rounded-lg" 
              onPress={toggleCameraFacing}
            >
              <Text className="text-white text-base">Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="bg-black/60 p-4 rounded-lg" 
              onPress={takePicture}
            >
              <Text className="text-white text-base">Take Photo</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
        {photo && (
          <View className="absolute right-2.5 top-2.5 w-[100px] h-[150px] rounded-lg overflow-hidden">
            <Image source={{ uri: photo }} className="w-full h-full" />
          </View>
        )}
      </View>
    );
}

export default TestCamera