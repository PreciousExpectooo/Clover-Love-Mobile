import React, { useState, useEffect } from "react";
import CustomLayout from "@/components/CustomLayout";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { interestsOptions } from "@/lib/data";

type SelectInterestProps = {
  formData: { interests: string };
  updateFormData: (data: { interests: string }) => void;
};

const SelectInterest: React.FC<SelectInterestProps> = ({ updateFormData }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handlePress = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = prevSelectedItems.includes(index)
        ? prevSelectedItems.filter((item) => item !== index)
        : [...prevSelectedItems, index];

      const selectedInterests = newSelectedItems
        .map((idx) => interestsOptions[idx].title)
        .join(", ");
      updateFormData({ interests: selectedInterests });

      return newSelectedItems;
    });
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
    </CustomLayout>
  );
};

export default SelectInterest;
