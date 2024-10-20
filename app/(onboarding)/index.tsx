import { Image, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

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
        <View className="flex-col gap-2">
          <View className="w-full">
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/(login)");
              }}
              className="bg-white flex-row justify-center items-center h-[54px] rounded-[8px]"
            >
              <Text className="text-[#640D6B]">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="w-full">
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/(signup)");
              }}
              className="border-white border-[1px] flex-row justify-center items-center h-[54px] rounded-[8px]"
            >
              <Text className="text-white">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
