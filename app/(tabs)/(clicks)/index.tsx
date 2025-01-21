import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomPageLayout from "@/components/CustomPageLayout";
import { clicksData } from "@/lib/data";

const Clicks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClicks = clicksData.filter((item) =>
    item.groupName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CustomPageLayout
      isClicks={true}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <View className="mt-[20px]">
        {filteredClicks.length > 0 ? (
          filteredClicks.map((item, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center border-b-[0.3px] border-[#716C6C] py-2"
            >
              <View className="flex-row items-center space-x-2">
                <item.profilePic />
                <View className="space-y-1">
                  <Text className="font-bold">{item.groupName}</Text>
                  <Text className="text-[#716C6C] text-[12px]">
                    {item.groupDesc}
                  </Text>
                </View>
              </View>
              <View>
                <Text className="text-[#640D6B] text-[12px]">
                  {item.status}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text className="text-[#716C6C]">No results found</Text>
        )}
      </View>
    </CustomPageLayout>
  );
};

export default Clicks;
