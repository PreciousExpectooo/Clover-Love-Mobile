// SignUpForm.tsx (as a page)
import React from "react";
import { useFormContext } from "@/components/FormContext";
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
import SelectInterest from "./interest";
import IdealMatch from "./match";
import ScanID from "./scan";
import { StatusBar } from "expo-status-bar";

const SignUpForm = () => {
  const { formData, updateFormData } = useFormContext();

  const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      <SignUpPhoneNumber formData={formData} updateFormData={updateFormData} />,
      <SignUpOTP formData={formData} updateFormData={updateFormData} />,
      <ProfileDetails formData={formData} updateFormData={updateFormData} />,
      <GenderSelect formData={formData} updateFormData={updateFormData} />,
      <ScanID />,
      <Nickname formData={formData} updateFormData={updateFormData} />,
      <SelectInterest updateFormData={updateFormData} />,
      <IdealMatch formData={formData} updateFormData={updateFormData} />,
    ]);

  const handleFinish = () => {
    console.log("Sign Up Form submitted:", formData);
    router.push("/(root)/(tabs)/(finders)");
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
                title={
                  isLastStep
                    ? "Finish"
                    : currentStepIndex === 4
                    ? "Start Scanning"
                    : "Continue"
                }
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SignUpForm;
