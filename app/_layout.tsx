import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import "./globals.css";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(form)" />
        <Stack.Screen name="(output)" />
      </Stack>
    </ConvexProvider>
  );
}
