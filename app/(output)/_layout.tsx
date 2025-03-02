import { Stack } from "expo-router";
import { FormDataProvider } from "@/components/FormDataContext";

export default function OutputLayout() {
  return (
    <FormDataProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="budget" />
        <Stack.Screen name="loading" />
      </Stack>
    </FormDataProvider>
  );
}
