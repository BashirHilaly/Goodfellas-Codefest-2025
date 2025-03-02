import { Stack } from "expo-router";

export default function OutputLayout() {
  return (
    <Stack>
      <Stack.Screen name="budget" />
      <Stack.Screen name="loading" />
    </Stack>
  );
}
