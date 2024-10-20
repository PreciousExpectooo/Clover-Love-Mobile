import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import FormField from "@/components/FormField";

export default function ProfileDetails() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    dateOfBirth: "",
    employmentStatus: "",
    occupation: "",
    Address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView className="h-full flex-1">
      <KeyboardAvoidingView>
        <ScrollView
          // contentContainerStyle={{ height: "100%" }}
          style={{ marginHorizontal: 20 }}
        >
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
                  Add Profile Details
                </Text>
                <Text className="font-[400] text-[12px] text-[#716C6C]">
                  Please enter your details to continue
                </Text>
              </View>

              <View className="bg-[#E65C191A] flex-col ">
                <FormField
                  title="Name"
                  placeholder="Kizito Don-Pedro"
                  otherStyles="text-black"
                />
                <FormField
                  title="Email Address"
                  placeholder="kizitodonpedro@gmail.com"
                  otherStyles="text-black"
                />
                <FormField
                  title="Date of Birth"
                  placeholder="Kizito Don-Pedro"
                  otherStyles="text-black"
                />
                <FormField
                  title="Mobile"
                  placeholder="Kizito Don-Pedro"
                  otherStyles="text-black"
                />
                <FormField
                  title="Employment Status"
                  placeholder="Kizito Don-Pedro"
                  otherStyles="text-black"
                />
                <FormField
                  title="Occupation"
                  placeholder="Kizito Don-Pedro"
                  otherStyles="text-black"
                />
                <FormField
                  title="Address"
                  placeholder="Kizito Don-Pedro"
                  otherStyles="text-black"
                />
              </View>
            </View>
          </View>
          <View className="mt-[20px]">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/(login)/otp")}
              className="bg-[#640D6B] h-[54px] flex-row items-center justify-center rounded-[8px] "
            >
              <Text className="text-white text-[16px] font-[700]">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
