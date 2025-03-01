import { Stack } from "expo-router";

export default function OutputLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="budget" />
      <Stack.Screen name="loading" />
    </Stack>
  );
}
