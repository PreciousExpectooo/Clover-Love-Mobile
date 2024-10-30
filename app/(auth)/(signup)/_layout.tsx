import { Stack } from "expo-router";
import React from "react";

const SignUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="details" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="nickname" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SignUpLayout;
