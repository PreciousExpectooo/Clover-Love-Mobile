import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { notificationsData } from "@/lib/data";

const Notifications = ({ searchQuery }: any) => {
  const filteredClicks = notificationsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                <Text className="font-bold">{item.name}</Text>
                <Text className="text-[#716C6C] text-[12px]">{item.info}</Text>
                <View className="flex-row items-center space-x-3">
                  <TouchableOpacity className="bg-[#4BAF4F40] p-2 rounded-[24px]">
                    <Text className="text-[#4BAF4F] text-[10px]">Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-[#E65C191A] p-2 rounded-[24px]">
                    <Text className="text-[#D11919] text-[10px]">Decline</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-[#D9D9D926] p-2 rounded-[24px]">
                    <Text className="text-[10px] text-[#000]">
                      View Profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View>
              <Text className="text-[#640D6B] text-[12px]">{item.time}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text className="text-[#716C6C]">No results found</Text>
      )}
    </View>
  );
};

export default Notifications;
