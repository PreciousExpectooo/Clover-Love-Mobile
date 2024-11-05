import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import ReactNativePhoneInput from "react-native-phone-input";
import CustomLayout from "@/components/CustomLayout";
import { StatusBar } from "expo-status-bar";

export default function SignUpPhoneNumber({ formData, updateFormData }: any) {
  const [isValid, setIsValid] = useState(true);
  const phoneRef = React.useRef<ReactNativePhoneInput>(null);

  const handlePhoneChange = (number: any) => {
    updateFormData({ phoneNumber: number });
    if (phoneRef.current) {
      setIsValid(phoneRef.current.isValidNumber());
    }
  };
  return (
    <CustomLayout
      title="Enter Phone number"
      subtitle="Please enter your phone number to sign up"
    >
      <View
        className={`border-[1px] h-[54px] items-center flex-row rounded-[8px] px-2 ${
          isValid ? "border-[#640D6B]" : "border-red-500"
        }`}
      >
        <ReactNativePhoneInput
          ref={phoneRef}
          initialCountry="ng"
          flagStyle={{ borderRadius: 3 }}
          onChangePhoneNumber={handlePhoneChange}
          initialValue={formData.phoneNumber}
        />
      </View>
      {!isValid && (
        <Text className="text-red-500 text-sm mt-1">
          Please enter a valid phone number
        </Text>
      )}
      <StatusBar style="auto" />
    </CustomLayout>
  );
}
