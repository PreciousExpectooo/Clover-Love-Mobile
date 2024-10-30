import React from "react";
import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import CustomLayout from "@/components/CustomLayout";

export default function LoginOTP({ updateFormData }: any) {
  const handleOTPChange = (otp: any) => {
    updateFormData({ otp });
  };
  return (
    <CustomLayout
      title="Enter Verification"
      subtitle="Please enter OTP to log in"
    >
      <View className="w-full mt-2">
        <OtpInput
          numberOfDigits={6}
          onTextChange={handleOTPChange}
          focusColor={"#640D6B"}
        />
      </View>
    </CustomLayout>
  );
}
