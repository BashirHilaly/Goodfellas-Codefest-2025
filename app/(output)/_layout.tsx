import { Stack } from "expo-router";
import { FormDataProvider } from "@/components/FormDataContext";

export default function OutputLayout() {
  return (
    <FormDataProvider>
      <Stack>
        <Stack.Screen name="budget" />
        <Stack.Screen name="loading" />
      </Stack>
    </FormDataProvider>
  );
}
