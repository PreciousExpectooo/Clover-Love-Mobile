import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { findersData } from "@/lib/data";

const Swipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="mt-[20px]">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={findersData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index} className="rounded-[16px] relative">
            <item.profilePic width={345} height={453} />
            <View className="absolute bottom-24 z-10 w-full flex-row justify-center">
              <View className="">
                <Text className="font-bold text-white text-[20px]">
                  {item.name}, {item.age}
                </Text>
                <Text className="text-white text-[18px]">{item.job}</Text>
              </View>
            </View>
            <View className="absolute bottom-2 flex-row items-center z-50 w-full justify-evenly">
              <View className="bg-white rounded-full p-[10px] z-50">
                <Image
                  source={require("@/assets/images/close.png")}
                  className="z-50"
                />
              </View>
              <View className="bg-white rounded-full p-[15px] flex-row">
                <Image source={require("@/assets/images/favorite.png")} />
              </View>
              <View className="bg-white rounded-full p-[10px]">
                <Image source={require("@/assets/images/star.png")} />
              </View>
            </View>
          </View>
        )}
        onScroll={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const viewSize = 345;
          const selectedIndex = Math.floor(contentOffsetX / viewSize);
          setCurrentIndex(selectedIndex);
        }}
        scrollEventThrottle={16}
        snapToInterval={345}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
};

export default Swipe;
