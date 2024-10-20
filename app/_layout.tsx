import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

import { Stack } from "expo-router";
import "react-native-reanimated";
export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(onboarding)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/(login)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/(signup)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/(login)/otp"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/(signup)/otp"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/(login)/details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/(signup)/nickname"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
