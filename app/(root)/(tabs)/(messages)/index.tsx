import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import CustomPageLayout from "@/components/CustomPageLayout";
import PillNav from "@/components/PillNav";
import { clicksData, notificationsData, pillNavMessages } from "@/lib/data";
import All from "./all";
import Unread from "./unread";
import Clicks from "./clicks";
import Notifications from "./notifications";
import chats from "@/assets/data/chats.json";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(pillNavMessages[0]);

  const filteredChats = chats.filter((chat) =>
    chat.from.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadChats = chats.filter((chat) => !chat.read);

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
            <FlatList
              data={filteredChats}
              renderItem={({ item }) => <ChatRow {...item} />}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
              )}
            />
          )}

          {activeTab === pillNavMessages[1] && (
            <FlatList
              data={unreadChats}
              renderItem={({ item }) => <ChatRow {...item} />}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
              )}
            />
          )}
          {activeTab === pillNavMessages[2] && (
            <FlatList
              data={clicksData}
              renderItem={({ item }) => <Clicks searchQuery={searchQuery} />}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={[defaultStyles.separator, { marginRight: 90 }]} />
              )}
            />
          )}
          {activeTab === pillNavMessages[3] && (
            <FlatList
              data={notificationsData}
              renderItem={({ item }) => (
                <Notifications searchQuery={searchQuery} />
              )}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={[defaultStyles.separator, { marginRight: 90 }]} />
              )}
            />
          )}
        </View>
      </View>
    </CustomPageLayout>
  );
};

export default Messages;
