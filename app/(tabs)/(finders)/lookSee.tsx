import { pillNavFinders } from "@/lib/data";
import React, { useState } from "react";
import { View, Image, Text } from "react-native";

const LookSee = ({ findersData }: any) => {
  return (
    <View className="mt-[20px] flex-row flex-wrap">
      {findersData.map((item: any, index: any) => (
        <View key={index} className="relative w-1/2 p-1">
          <item.profilePic width={163} height={183} />
          <View className="absolute left-[15px] bottom-[15px]">
            <Text className="text-white font-bold">
              {item.name}, {item.age}
            </Text>
            <Text className="text-white">{item.job}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default LookSee;
