import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import React from "react";
import CustomLayout from "@/components/CustomLayout";

export default function SignUpOTP({ updateFormData }: any) {
  const handleOTPChange = (otp: any) => {
    updateFormData({ otp });
  };
  return (
    <CustomLayout title="Enter OTP" subtitle="Please enter OTP to sign up">
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
