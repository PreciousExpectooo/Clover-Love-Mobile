import React from "react";
import { Text, View } from "react-native";
import CustomPageLayout from "@/components/CustomPageLayout";

const Clicks = () => {
  return (
    <CustomPageLayout isClicks={true}>
      <View className="mt-[20px]">
        <Text>Clicks</Text>
      </View>
    </CustomPageLayout>
  );
};

export default Clicks;
