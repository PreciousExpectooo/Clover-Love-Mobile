import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

export default function Nickname() {
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
                    What’s your Nickname?
                  </Text>
                  <Text className="font-[400] text-[12px] text-[#716C6C]">
                    Something cool, fun and relatable like sugarplum.
                  </Text>
                </View>
                <View className="w-full mt-2">
                  <TextInput
                    placeholder="Nickame right here"
                    className="bg-[#FAFAFA] h-[54px] rounded-[8px]"
                    placeholderTextColor={"#000"}
                  />
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  router.push("/(onboarding)");
                }}
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
