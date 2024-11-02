import React, { useState } from "react";
import CustomLayout from "@/components/CustomLayout";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const IdealMatch = ({ formData, updateFormData }: any) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    updateFormData({ idealMatch: item });
  };

  const options = [
    {
      label: "Love",
      description: "I am not here to play around",
      icon: require("../../../assets/images/love-match.png"),
    },
    {
      label: "Friend",
      description: "I am not here to play around",
      icon: require("../../../assets/images/friends-match.png"),
    },
    {
      label: "Business",
      description: "I am not here to play around",
      icon: require("../../../assets/images/business-match.png"),
    },
  ];

  return (
    <CustomLayout
      title="Ideal Match"
      subtitle="What are you hoping to find here on Clover?"
    >
      <View className="w-full space-y-5">
        {options.map((option) => (
          <TouchableOpacity
            key={option.label}
            onPress={() => handleSelect(option.label)}
            className={`flex flex-row space-x-[26px] items-center p-[15px] rounded-[8px] border-[0.5px] border-solid ${
              selectedItem === option.label
                ? " border-[#640D6B] border-[1.5px]"
                : "border-transparent border-[#716C6C]"
            }`}
          >
            <View className="bg-[#640D6B] w-[52px] h-[52px] flex items-center justify-center rounded-[8px]">
              <Image source={option.icon} />
            </View>
            <View>
              <Text className="font-[700] text-[16px]">{option.label}</Text>
              <Text className="text-[#716C6C]">{option.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
};

export default IdealMatch;
