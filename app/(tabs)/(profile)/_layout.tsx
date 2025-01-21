import React from "react";
import { Stack } from "expo-router";
import { FormProvider } from "@/components/FormContext";

const Layout = () => {
  return (
    <FormProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="profileEdit" options={{ headerShown: false }} />
      </Stack>
    </FormProvider>
  );
};

export default Layout;
