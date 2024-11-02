import React, { useState } from "react";
import CustomLayout from "@/components/CustomLayout";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { interestsOptions } from "@/lib/data";
import { StatusBar } from "expo-status-bar";

const SelectInterest = ({ updateFormData }: any) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handlePress = (index: number) => {
    const newSelectedItems = selectedItems.includes(index)
      ? selectedItems.filter((item) => item !== index)
      : [...selectedItems, index];

    setSelectedItems(newSelectedItems);

    // Update form data after state is set
    setTimeout(() => {
      const selectedInterests = newSelectedItems
        .map((idx) => interestsOptions[idx].title)
        .join(", ");
      updateFormData({ interests: selectedInterests });
    }, 0);
  };

  return (
    <CustomLayout
      title="Select your Interest"
      subtitle="Please select your interest"
    >
      <View className="flex flex-row flex-wrap gap-[11px]">
        {interestsOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            className={`w-fit px-[8px] h-[40px] justify-center gap-1 rounded-[8px] items-center my-2 bg-[#fff] border-[1px] border-solid border-[#640D6B] ${
              selectedItems.includes(index) && "bg-[#640D6B]"
            }`}
          >
            <View className="flex flex-row items-center space-x-2">
              <Image
                source={
                  selectedItems.includes(index) ? item.icon : item.altIcon
                }
              />
              <Text
                className={`text-[#640D6B] text-[12px]  ${
                  selectedItems.includes(index) && "text-white"
                }`}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
};

export default SelectInterest;
