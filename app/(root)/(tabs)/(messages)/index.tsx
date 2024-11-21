import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomPageLayout from "@/components/CustomPageLayout";
import PillNav from "@/components/PillNav";
import { pillNavMessages } from "@/lib/data";

const Messages = () => {
  const [activeTab, setActiveTab] = useState(pillNavMessages[0]);
  return (
    <CustomPageLayout isMessages={true}>
      <View className="mt-[20px]">
        <PillNav
          navData={pillNavMessages}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <View className="mt-[20px]">
          {activeTab === pillNavMessages[0] && <Text>Messages</Text>}
        </View>
      </View>
    </CustomPageLayout>
  );
};

export default Messages;
