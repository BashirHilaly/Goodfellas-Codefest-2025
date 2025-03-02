import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { KeyboardDismissWrapper } from "@/components/KeyboardDismissWrapper";
import "./globals.css";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <KeyboardDismissWrapper>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(form)" />
          <Stack.Screen name="(output)" />
        </Stack>
      </KeyboardDismissWrapper>
    </ConvexProvider>
  );
}
