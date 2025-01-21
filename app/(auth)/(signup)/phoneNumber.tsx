import * as React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import ReactNativePhoneInput from "react-native-phone-input";
import CustomLayout from "@/components/CustomLayout";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import {
  useSignUp,
  useSignIn,
  isClerkAPIResponseError,
} from "@clerk/clerk-expo";

export default function SignUpPhoneNumber({ formData, updateFormData }: any) {
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const phoneRef = React.useRef<ReactNativePhoneInput>(null);
  const router = useRouter();
  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();

  const sendOTP = async () => {
    setLoading(true);
    try {
      const { phoneNumber } = formData;
      await signUp!.create({
        phoneNumber,
      });

      signUp!.preparePhoneNumberVerification();
      router.push(`/verify/${formData.phoneNumber}`);
    } catch (err) {
      console.log(err);
      if (isClerkAPIResponseError(err)) {
        if (err.errors[0].code === "form_indentifier_exists") {
          console.log("user exists");
          await trySignIn();
        } else {
          setLoading(false);
          Alert.alert("Error", err.errors[0].message);
        }
      }
    }
  };

  const handlePhoneChange = (number: any) => {
    updateFormData({ phoneNumber: number });
    if (phoneRef.current) {
      setIsValid(phoneRef.current.isValidNumber());
    }
  };

  // const sendOTP = async () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     router.push(`/verify/${formData.phoneNumber}`);
  //   }, 2000);
  // };

  // const sendOTP = () => {
  //   router.push(`/verify/${formData.phoneNumber}`);
  // };

  const trySignIn = async () => {
    const { phoneNumber } = formData;
    const { supportedFirstFactors } = await signIn!.create({
      identifier: phoneNumber,
    });

    const firstPhoneFactor: any = supportedFirstFactors?.find((factor: any) => {
      return factor.strategy === "phone_code";
    });

    const { phoneNumberId } = firstPhoneFactor;

    await signIn!.prepareFirstFactor({
      strategy: "phone_code",
      phoneNumberId,
    });
    router.push(`/verify/${formData.phoneNumber}?signin=true`);
    setLoading(false);
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
      <TouchableOpacity onPress={sendOTP}>
        <Text>Send OTP</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </CustomLayout>
  );
}
