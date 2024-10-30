import { View, Text } from "react-native";
import ReactNativePhoneInput from "react-native-phone-input";
import React from "react";
import CustomLayout from "@/components/CustomLayout";

export default function SignUpPhoneNumber({ formData, updateFormData }: any) {
  const handlePhoneChange = (number: any) => {
    updateFormData({ phoneNumber: number });
  };
  return (
    <CustomLayout
      title="Enter Phone number"
      subtitle="Please enter your phone number to sign up"
    >
      <View className="border-[#640D6B] border-[1px] h-[54px] items-center flex-row rounded-[8px] px-2">
        <ReactNativePhoneInput
          initialCountry="ng"
          flagStyle={{ borderRadius: 3 }}
          onChangePhoneNumber={handlePhoneChange}
          initialValue={formData.phoneNumber}
        />
      </View>
    </CustomLayout>
  );
}
