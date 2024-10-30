import React from "react";
import { View, Text } from "react-native";
const CustomLayout = ({ children, title, subtitle }: any) => {
  return (
    <View className="space-y-[15px]">
      <View className="space-y-1">
        <Text className="font-[700] text-[18px]">{title}</Text>
        <Text className="font-[400] text-[12px] text-[#716C6C]">
          {subtitle}
        </Text>
      </View>

      {children}
    </View>
  );
};

export default CustomLayout;
