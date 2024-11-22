import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomPageLayout from "@/components/CustomPageLayout";
import PillNav from "@/components/PillNav";
import { pillNavMessages } from "@/lib/data";
import All from "./all";
import Unread from "./unread";
import Clicks from "./clicks";
import Notifications from "./notifications";

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(pillNavMessages[0]);
  return (
    <CustomPageLayout
      isMessages={true}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <View className="mt-[20px]">
        <PillNav
          navData={pillNavMessages}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <View className="mt-[20px]">
          {activeTab === pillNavMessages[0] && (
            <All searchQuery={searchQuery} />
          )}

          {activeTab === pillNavMessages[1] && (
            <Unread searchQuery={searchQuery} />
          )}
          {activeTab === pillNavMessages[2] && (
            <Clicks searchQuery={searchQuery} />
          )}
          {activeTab === pillNavMessages[3] && (
            <Notifications searchQuery={searchQuery} />
          )}
        </View>
      </View>
    </CustomPageLayout>
  );
};

export default Messages;
