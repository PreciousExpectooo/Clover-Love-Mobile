import React from "react";
import { View, Text } from "react-native";
import { messagesData } from "@/lib/data";

const Unread = ({ searchQuery }: { searchQuery: string }) => {
  const filteredClicks = messagesData.filter(
    (item) =>
      item.unread &&
      item.chatName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      {filteredClicks.length > 0 ? (
        filteredClicks.map((item, index) => (
          <View
            key={index}
            className="flex-row justify-between items-center border-b-[0.3px] border-[#716C6C] py-2"
          >
            <View className="flex-row items-center space-x-2">
              <item.profilePic />
              <View className="space-y-1">
                <Text className="font-bold">{item.chatName}</Text>
                <Text className="text-[#716C6C] text-[12px]">
                  {item.chatMessages}
                </Text>
              </View>
            </View>
            <View className="flex-col space-y-2">
              <Text className="text-[#640D6B] text-[12px]">{item.time}</Text>
              <View className="flex-row justify-end">
                <View className="justify-center bg-[#E65C19] items-center rounded-full w-[16px] h-[16px]">
                  <Text className="text-white text-[12px]">
                    {item.noOfMessages}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text className="text-[#716C6C]">No unread messages</Text>
      )}
    </View>
  );
};

export default Unread;
