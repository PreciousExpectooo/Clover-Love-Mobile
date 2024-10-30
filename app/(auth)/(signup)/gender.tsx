import React from "react";
import CustomLayout from "@/components/CustomLayout";
import { View, Text } from "react-native";

const GenderSelect = () => {
  return (
    <CustomLayout title="Select Gender" subtitle="Please select your gender">
      <View>
        <Text>Male</Text>
        <Text>Female</Text>
      </View>
    </CustomLayout>
  );
};

export default GenderSelect;
