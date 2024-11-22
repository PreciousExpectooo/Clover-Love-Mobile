import { Tabs } from "expo-router";
import { View, Image } from "react-native";
import React from "react";

const TabIcon = ({ focused, source }: { focused: boolean; source: any }) => (
  <View>
    <View>
      <Image source={source} />
    </View>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="(finders)"
      screenOptions={{ tabBarActiveTintColor: "#640D6B" }}
    >
      <Tabs.Screen
        name="(finders)"
        options={{
          title: "Finders",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={
                focused
                  ? require("../../../assets/icons/active/finders.png")
                  : require("../../../assets/icons/inactive/finders.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(clicks)"
        options={{
          title: "Clicks!",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={
                focused
                  ? require("../../../assets/icons/active/clicks.png")
                  : require("../../../assets/icons/inactive/clicks.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(status)"
        options={{
          title: "Status",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={
                focused
                  ? require("../../../assets/icons/active/status.png")
                  : require("../../../assets/icons/inactive/status.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(messages)"
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={
                focused
                  ? require("../../../assets/icons/active/messages.png")
                  : require("../../../assets/icons/inactive/messages.png")
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={
                focused
                  ? require("../../../assets/icons/active/profile.png")
                  : require("../../../assets/icons/inactive/profile.png")
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
