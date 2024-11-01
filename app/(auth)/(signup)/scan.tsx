import React from "react";
import CustomLayout from "@/components/CustomLayout";
import { View, Text } from "react-native";

const ScanID = () => {
  return (
    <CustomLayout
      title="Scan ID"
      subtitle="We accept national identity cards and international passports"
    >
      <View>
        <Text>Scanning</Text>
      </View>
    </CustomLayout>
  );
};

export default ScanID;
