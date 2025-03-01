import { Stack } from "expo-router";

export default function FormLayout() {
  return (
    <Stack>
      <Stack.Screen name="addrTime" />
      <Stack.Screen name="confirm" />
      <Stack.Screen name="index" />
      <Stack.Screen name="materials" />
      <Stack.Screen name="project" />
      <Stack.Screen name="roomDetails" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="capture" />
      <Stack.Screen name="imageConfirm" />
    </Stack>
  );
}
