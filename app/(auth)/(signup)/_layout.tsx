import * as React from "react";
import { Stack } from "expo-router";
import { FormProvider } from "@/components/FormContext";

const SignUpLayout = () => {
  return (
    <FormProvider>
      <Stack>
        <Stack.Screen name="details" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="nickname" options={{ headerShown: false }} />
        <Stack.Screen name="otp" options={{ headerShown: false }} />
        <Stack.Screen name="schoolSelect" options={{ headerShown: false }} />
      </Stack>
    </FormProvider>
  );
};

export default SignUpLayout;
