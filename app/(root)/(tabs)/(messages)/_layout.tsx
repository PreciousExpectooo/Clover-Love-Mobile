import React from "react";
import { Link, router, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import contacts from "@/assets/data/contacts.json";
import { useLocalSearchParams } from "expo-router";

const Layout = () => {
  const { from } = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/new-chat"
        options={{
          presentation: "modal",
          title: "New Chat",
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerSearchBarOptions: {
            placeholder: "Search name or number",
            hideWhenScrolling: false,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" color={Colors.gray} size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerShown: false,

          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
