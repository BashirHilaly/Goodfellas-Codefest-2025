import { Stack } from "expo-router";
import { FormDataProvider } from "@/components/ui/FormDataContext";

export default function FormLayout() {
  return (
    <FormDataProvider>
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
    </FormDataProvider>
  );
}
