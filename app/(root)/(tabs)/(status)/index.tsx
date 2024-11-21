import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomPageLayout from "@/components/CustomPageLayout";

const Status = () => {
  return (
    <CustomPageLayout isStatus={true}>
      <View className="mt-[20px]">
        <Text>Status</Text>
      </View>
    </CustomPageLayout>
  );
};

export default Status;
