import { Stack } from "expo-router";
import React from "react";

const OnBoardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnBoardingLayout;
