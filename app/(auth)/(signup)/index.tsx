import React from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { useMultiStepForm } from "@/useMultistepForm";
import SignUpPhoneNumber from "./phoneNumber";
import SignUpOTP from "./otp";
import ProfileDetails from "./details";
import GenderSelect from "./gender";
import Nickname from "./nickname";
import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    otp: "",
    name: "",
    email: "",
    mobileNo: "",
    dateOfBirth: "",
    employmentStatus: "",
    occupation: "",
    address: "",
    nickname: "",
  });
  const updateFormData = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };
  const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      <SignUpPhoneNumber formData={formData} updateFormData={updateFormData} />,
      <SignUpOTP formData={formData} updateFormData={updateFormData} />,
      <ProfileDetails formData={formData} updateFormData={updateFormData} />,
      <GenderSelect />,
      <Nickname formData={formData} updateFormData={updateFormData} />,
    ]);

  const handleFinish = () => {
    console.log("Sign Up Form submitted:", formData);
    router.push("/(onboarding)/welcome");
  };
  return (
    <SafeAreaView className="h-full">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        className="bg-white"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            height: `${currentStepIndex === 2 ? "auto" : "100%"}`,
          }}
        >
          <View className="min-h-[100%] my-auto p-[20px] flex-col justify-between">
            <View className="w-full space-y-[40px] ">
              <View className="flex flex-row items-center justify-between">
                <TouchableOpacity
                  onPress={() => (isFirstStep ? router.back() : back())}
                  className=""
                >
                  <Image source={require("@/assets/images/back.png")} />
                </TouchableOpacity>
                <View>
                  <Text>
                    {currentStepIndex + 1} / {steps.length}
                  </Text>
                </View>
              </View>
              <View>{step}</View>
            </View>
            <View>
              <CustomButton
                onPress={() => (isLastStep ? handleFinish() : next())}
                title={isLastStep ? "Finish" : "Continue"}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SignUpForm;
