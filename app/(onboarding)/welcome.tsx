import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function OnBoarding() {
  return (
    <View className="bg-[#640D6B] h-full p-[20px]">
      <View className="min-h-[85%] my-auto flex-col justify-evenly">
        <View className="w-full flex-row justify-center">
          <Image
            source={require("@/assets/images/onboarding-logo.png")}
            alt=""
          />
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="w-full">
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/(login)");
              }}
              className="bg-white flex-row justify-center items-center h-[54px] rounded-[8px]"
            >
              <Text className="text-[#640D6B] text-[16px] font-[700]">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full">
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/(signup)");
              }}
              className="border-white border-[1px] flex-row justify-center items-center h-[54px] rounded-[8px]"
            >
              <Text className="text-white text-[16px] font-[700]">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
