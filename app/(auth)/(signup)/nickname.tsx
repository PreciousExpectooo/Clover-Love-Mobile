import React from "react";
import { View, TextInput, Text } from "react-native";
import CustomLayout from "@/components/CustomLayout";

export default function Nickname({ formData, updateFormData }: any) {
  return (
    <CustomLayout
      title="What’s your Nickname?"
      subtitle="Something cool, fun and relatable like sugarplum."
    >
      <View className="w-full mt-2">
        <TextInput
          placeholder="Nickname right here"
          className="bg-[#FAFAFA] h-[54px] rounded-[8px]"
          placeholderTextColor="#000"
          value={formData.nickname}
          style={{ paddingLeft: 10 }}
          onChangeText={(e: any) =>
            updateFormData({ ...formData, nickname: e })
          }
        />
      </View>
    </CustomLayout>
  );
}
