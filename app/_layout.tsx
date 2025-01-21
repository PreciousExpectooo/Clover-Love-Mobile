import React, { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, useSegments } from "expo-router";
import "react-native-reanimated";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const router = useRouter();
  const segments = useSegments();
  const { isLoaded, isSignedIn } = useAuth();

  const [loaded, error] = useFonts({
    spaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // DO NOT TOUCH !!!!!!!!!!!
  // useEffect(() => {
  //   if (!isLoaded) return;
  //   const inTabsGroup = segments[0] === "(tabs)";

  //   console.log("isSignedIn changed", isSignedIn);

  //   if (isSignedIn && !inTabsGroup) {
  //     router.replace("/(tabs)/(finders)");
  //   } else if (!isSignedIn) {
  //     router.replace("/");
  //   }
  // }, [isSignedIn]);

  if (!loaded || !isLoaded) {
    return <View />;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
};
export default RootLayout;
