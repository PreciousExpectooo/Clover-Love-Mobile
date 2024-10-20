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
import { OtpInput } from "react-native-otp-entry";

export default function SignUpOTP() {
  return (
    <SafeAreaView className="h-full">
      <KeyboardAvoidingView behavior="padding">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="min-h-[90%] my-auto p-[20px] flex-col justify-between">
            <View className="space-y-[40px] w-full">
              <View>
                <TouchableOpacity
                  onPress={() => {
                    router.back();
                  }}
                >
                  <Image source={require("@/assets/images/back.png")} />
                </TouchableOpacity>
              </View>
              <View className="space-y-[15px]">
                <View className="space-y-1">
                  <Text className="font-[700] text-[18px]">
                    Enter Verification
                  </Text>
                  <Text className="font-[400] text-[12px] text-[#716C6C]">
                    Please enter OTP to sign up
                  </Text>
                </View>
                <View className="w-full mt-2">
                  <OtpInput
                    numberOfDigits={6}
                    onTextChange={(text) => console.log(text)}
                    focusColor={"#640D6B"}
                  />
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => router.push("/(auth)/(signup)/nickname")}
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
