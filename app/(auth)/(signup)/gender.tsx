import React from "react";
import CustomLayout from "@/components/CustomLayout";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { genderOptions } from "@/lib/data";
import { StatusBar } from "expo-status-bar";

const GenderSelect = ({ updateFormData }: any) => {
  const [selectedGender, setSelectedGender] = useState<number | null>(null);
  const handlePress = (index: number) => {
    setSelectedGender(selectedGender === index ? null : index);

    if (selectedGender === index) {
      updateFormData({ gender: "" });
    } else {
      updateFormData({ gender: genderOptions[index].value });
    }
  };

  return (
    <CustomLayout title="Select Gender" subtitle="Please select your gender">
      <View className="flex items-center justify-center space-y-5">
        {genderOptions.map((item, index) => (
          <TouchableOpacity
            onPress={() => handlePress(index)}
            className="flex items-center space-y-2"
            key={index}
          >
            <Image
              source={selectedGender === index ? item.iconHighlight : item.icon}
              className="bg-white"
            />
            <View>
              <Text
                className={`${
                  selectedGender === index
                    ? "text-[#640D6B] font-bold"
                    : "text-[#949494]"
                }`}
              >
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
};

export default GenderSelect;
