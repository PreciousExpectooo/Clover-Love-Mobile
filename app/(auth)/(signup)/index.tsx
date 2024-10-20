import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import ReactNativePhoneInput from "react-native-phone-input";

export default function SignUpPhoneNumber() {
  return (
    <SafeAreaView className="h-full">
      <KeyboardAvoidingView behavior="padding">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="min-h-[90%] my-auto p-[20px] flex-col justify-between">
            <View className="space-y-[40px] w-full">
              <View>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/(onboarding)");
                  }}
                >
                  <Image source={require("@/assets/images/back.png")} />
                </TouchableOpacity>
              </View>
              <View className="space-y-[15px]">
                <View className="space-y-1">
                  <Text className="font-[700] text-[18px]">
                    Enter Phone Number
                  </Text>
                  <Text className="font-[400] text-[12px] text-[#716C6C]">
                    Please enter your phone number to Sign Up
                  </Text>
                </View>
                <View className="border-[#640D6B] border-[1px] h-[54px] items-center flex-row rounded-[8px] px-2">
                  <ReactNativePhoneInput
                    initialCountry="ng"
                    flagStyle={{ borderRadius: 3 }}
                  />
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => router.push("/(auth)/(signup)/otp")}
                className="bg-[#640D6B] h-[54px] flex-row items-center justify-center rounded-[8px] "
              >
                <Text className="text-white text-[16px] font-[700]">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
