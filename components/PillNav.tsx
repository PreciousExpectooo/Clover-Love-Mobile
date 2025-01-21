import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function PillNav({
  navData,
  activeTab,
  onTabChange,
}: {
  navData: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}) {
  return (
    <View className="w-full px-[10px]">
      <View className="flex-row items-center justify-between">
        {navData.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange?.(tab)}
            className={`p-[10px] rounded-[24px] ${
              activeTab === tab ? "bg-[#640D6B52]" : "bg-[#f9f9f9]"
            }`}
          >
            <Text
              className={
                activeTab === tab
                  ? "text-[#640D6B] font-[700] text-[12px]"
                  : "text-black text-[12px]"
              }
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
