import React from "react";
import { useFormContext } from "@/components/FormContext";
import { useMultiStepForm } from "@/useMultistepForm";
import ProfileEdit from "../profileEdit";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const EditDetails = () => {
  const { formData, updateFormData } = useFormContext();
  const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultiStepForm([<ProfileEdit />]);
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
              </View>
              <View>{step}</View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditDetails;
