import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SvgMatched from "@/components/svgs/Matched";

const QuickMatch = () => {
  return (
    <View className="mt-[20px]">
      <View className="w-full flex-row justify-center">
        <SvgMatched />
      </View>
      <View className="w-full space-y-[24px]">
        <View className="w-full flex-row justify-center">
          <View className="flex-col space-y-[24px]">
            <View className="flex-row justify-center">
              <Text className="text-[#640D6B] font-[700] text-[28px]">
                Congratulations
              </Text>
            </View>
            <View className="flex-col items-center space-y-[5px]">
              <Text className="text-[#640D6B] text-[16px]">
                It's a match (1/3)
              </Text>
              <Text className="text-[#716C6C]">Start a conversation now?</Text>
            </View>
          </View>
        </View>
        <View className="w-full flex-row justify-center">
          <View className="flex-row items-center space-x-[20px]">
            <TouchableOpacity className="bg-[#640D6B] w-[161px] h-[54px] rounded-[8px] flex-row items-center justify-center">
              <Text className="text-white">Say Hello</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity className="bg-[#D9D9D9] w-[161px] h-[54px] rounded-[8px] flex-row items-center justify-center">
                <Text className="text-[#716C6C]">Keep Swiping</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuickMatch;
