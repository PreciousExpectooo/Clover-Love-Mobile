import React from "react";
import CustomLayout from "@/components/CustomLayout";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const ScanID = () => {
  return (
    <CustomLayout
      title="Scan ID"
      subtitle="We accept national identity cards and international passports"
    >
      <View>
        <Text>Scanning</Text>
      </View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
};

export default ScanID;
