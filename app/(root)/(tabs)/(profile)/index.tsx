import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import SvgProfileImg from "../../../../dist/ProfileImg";
import SvgProfileImg from "@/components/svgs/ProfileImg";
import {
  Books,
  Diamond,
  Camera,
  Edit,
  Vibrate,
  Dropdown,
  Movies,
} from "@/components/svgs";
import { findersData } from "@/lib/data";
import ReactNativeModal from "react-native-modal";
import { router } from "expo-router";

import ProfileEdit from "./profileEdit";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"Gallery" | "Groups">("Gallery");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const truncatedText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ullam neque ratione?";
  const fullText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ullam neque ratione? Ea fuga, nisi sunt doloribus cum dicta odio, assumenda numquam quasi aspernatur asperiores quod similique, ratione expedita facere?";

  return (
    <ScrollView
      contentContainerStyle={{
        height: "auto",
      }}
      className="flex-1"
    >
      <View className="relative">
        <SvgProfileImg />
        <View className="absolute bottom-[25px] left-[25px]">
          <View className="flex-row items-center space-x-[8px]">
            <View className="bg-white w-[32px] h-[32px] rounded-full flex-row items-center justify-center">
              <Diamond />
            </View>
            <TouchableOpacity
              className="bg-[#E65C19] p-[10px] rounded-[8px] flex-row items-center space-x-2"
              onPress={() => setIsModalVisible(true)}
            >
              <Text className="text-white">Need a Friend</Text>
              <Dropdown />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <SafeAreaView className="h-full bg-white relative" edges={["bottom"]}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="min-h-[100%] ">
            <View className="space-y-[20px]">
              {/* Profile Info */}
              <View className="pb-2 border-b-solid border-b-[1px] border-b-[#D9D9D9]">
                <View className="p-[20px] flex-row w-full justify-between items-center">
                  <View className="space-y-1">
                    <Text className="font-[700] text-[16px]">
                      KizzyBree, 24
                    </Text>
                    <Text className="text-[#7E818C]">Product Designer</Text>
                    <View className="flex flex-row items-center space-x-1">
                      <Diamond />
                      <Text className="text-[12px]">The Crown</Text>
                    </View>
                  </View>
                  <View className="flex-row space-x-5">
                    <TouchableOpacity>
                      <Vibrate />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Camera />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        router.push("/(root)/(tabs)/(profile)/profileEdit")
                      }
                    >
                      <Edit />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* About Section */}
              <View className="pb-[20px] border-b-solid border-b-[1px] border-b-[#D9D9D9]">
                <View className="px-[20px] space-y-1">
                  <Text className="font-[700] text-[16px]">About</Text>
                  <Text className="text-[#7E818C]">
                    {isExpanded ? fullText : truncatedText}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setIsExpanded(!isExpanded)}
                    className="mt-1"
                  >
                    <Text className="text-[#640D6B]">
                      {isExpanded ? "Read Less" : "Read More"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Interests Section */}
              <View className="pb-[20px] border-b-solid border-b-[1px] border-b-[#D9D9D9]">
                <View className="px-[20px] space-y-1">
                  <Text className="font-[700] text-[16px]">Interests</Text>
                  <View className="flex-row space-x-[10px]">
                    <View className="px-[8px] h-[40px] justify-center gap-1 rounded-[8px] items-center my-2 bg-[#fff] border-[0.5px] border-solid border-[#7E818C]">
                      <View className="flex flex-row items-center space-x-2">
                        <Movies />
                        <Text className="">Movies</Text>
                      </View>
                    </View>
                    <View className="px-[8px] h-[40px] justify-center gap-1 rounded-[8px] items-center my-2 bg-[#fff] border-[0.5px] border-solid border-[#7E818C]">
                      <View className="flex flex-row items-center space-x-2">
                        <Books />
                        <Text className="">Books</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/* Tabs */}
              <View className="w-full flex-row justify-between border-b border-gray-300">
                <TouchableOpacity
                  onPress={() => setActiveTab("Gallery")}
                  className={`w-1/2 flex-row justify-center p-4 ${
                    activeTab === "Gallery" ? "bg-[#CACACA4D]" : ""
                  }`}
                >
                  <Text
                    className={
                      activeTab === "Gallery" ? "text-black font-bold" : ""
                    }
                  >
                    Gallery
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab("Groups")}
                  className={`w-1/2 flex-row justify-center p-4 ${
                    activeTab === "Groups" ? "bg-[#CACACA4D]" : ""
                  }`}
                >
                  <Text
                    className={
                      activeTab === "Groups" ? "text-black font-bold" : ""
                    }
                  >
                    Groups
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Conditional Rendering for Gallery */}
              {activeTab === "Gallery" && (
                <View className="flex flex-row flex-wrap px-1">
                  {findersData.map((item, index) => (
                    <View
                      key={index}
                      className="w-1/3 p-1"
                      style={{ alignItems: "center" }}
                    >
                      <item.profilePic width={114} height={154} />
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <ReactNativeModal
        isVisible={isModalVisible}
        onModalHide={() => setIsModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View className="flex-1 justify-center items-center ">
            <TouchableWithoutFeedback className="z-50">
              <View className="bg-white w-[90%] py-4 rounded-[10px] items-center space-y-2">
                <View className="w-full py-[10px] flex items-center justify-center  border-b-[#D9D9D9] border-solid border-b-[1px]">
                  <Text className="text-[#716C6C]">Single</Text>
                </View>
                <View className="w-full py-[10px] flex items-center justify-center  border-b-[#D9D9D9] border-solid border-b-[1px]">
                  <Text className="text-[#716C6C]">Talking Stage</Text>
                </View>
                <View className="w-full py-[10px] flex items-center justify-center  border-b-[#D9D9D9] border-solid border-b-[1px]">
                  <Text className="text-[#716C6C]">Dating Stage</Text>
                </View>
                <View className="w-full py-[10px] flex items-center justify-center  border-b-[#D9D9D9] border-solid border-b-[1px]">
                  <Text className="text-[#716C6C]">Bored</Text>
                </View>
                <View className="w-full py-[10px] flex items-center justify-center  ">
                  <Text className="text-[#716C6C] font-[700]">
                    Need a friend
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </ReactNativeModal>
    </ScrollView>
  );
};

export default Profile;
