import React from "react";
import { View, Text } from "react-native";
import ReactNativePhoneInput from "react-native-phone-input";
import CustomLayout from "@/components/CustomLayout";
import { StatusBar } from "expo-status-bar";

export default function LoginPhoneNumber({ formData, updateFormData }: any) {
  const handlePhoneChange = (number: any) => {
    updateFormData({ phoneNumber: number });
  };
  return (
    <CustomLayout
      title="Enter Phone number"
      subtitle="Please enter your phone number to log in"
    >
      <View className="border-[#640D6B] border-[1px] h-[54px] items-center flex-row rounded-[8px] px-2">
        <ReactNativePhoneInput
          initialCountry="ng"
          flagStyle={{ borderRadius: 3 }}
          onChangePhoneNumber={handlePhoneChange}
          initialValue={formData.phoneNumber}
        />
      </View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
}
