import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePathname } from "expo-router";

interface CustomPageLayoutProps {
  children: React.ReactNode;
  isFinders?: boolean;
  isStatus?: boolean;
  isClicks?: boolean;
  isMessages?: boolean;
  isProfile?: boolean;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
}

export default function CustomPageLayout({
  children,
  isFinders = false,
  isStatus = false,
  isClicks = false,
  isMessages = false,
  isProfile = false,
  searchQuery = "",
  setSearchQuery,
}: CustomPageLayoutProps) {
  return (
    <SafeAreaView className="h-full bg-white" edges={["top"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            height: "auto",
          }}
          className="flex-1"
        >
          <View className="min-h-[100%] p-[20px]">
            <View className="w-full space-y-[20px]">
              {/* Header */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center space-x-[10px]">
                  <View className="bg-[#640D6B52] w-[40px] h-[40px] rounded-[4px] items-center justify-center">
                    <Image source={require("@/assets/images/compass.png")} />
                  </View>
                  <View>
                    <Text className="font-[700] text-[16px]">
                      {isFinders
                        ? "Finders Keepers"
                        : isStatus
                        ? "Status"
                        : isClicks
                        ? "Clicks"
                        : isMessages
                        ? "Messages"
                        : isProfile
                        ? "Profile"
                        : "Keepers"}
                    </Text>
                    <Text className="text-[#716C6C] text-[12px]">
                      {isFinders
                        ? "Port Harcourt, Rivers State, Nigeria"
                        : "The color of love is purple."}
                    </Text>
                  </View>
                </View>
                <View>
                  {isFinders ? (
                    <Image source={require("@/assets/images/vibe.png")} />
                  ) : (
                    <Image source={require("@/assets/icons/add.png")} />
                  )}
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="h-[63px] rounded-[10px] border border-[#FAFAFA] flex-1 justify-center">
                  <View className="flex-row items-center space-x-[10px] px-4">
                    <Image source={require("@/assets/icons/search-icon.png")} />
                    <TextInput
                      placeholder={
                        isFinders
                          ? "Search"
                          : isStatus
                          ? "Search Status"
                          : isClicks
                          ? "Search Clicks"
                          : isMessages
                          ? "Search Messages"
                          : "Search"
                      }
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                      className="w-full"
                      placeholderTextColor="#7E818C"
                    />
                  </View>
                </View>
                <View className="bg-[#640D6B] w-[63px] h-[63px] rounded-[4px] items-center justify-center">
                  <Image source={require("@/assets/icons/filter.png")} />
                </View>
              </View>
            </View>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
