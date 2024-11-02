import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import CustomLayout from "@/components/CustomLayout";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFormContext } from "@/components/FormContext";

const SchoolSelect = () => {
  const universities = [
    {
      name: "Havard",
      title: "Harvard University",
      location: "Ikorodu, Lagos",
      icon: require("@/assets/images/uni-icon.png"),
    },
    {
      name: "Stanford",
      title: "Stanford University",
      location: "Ota, Ogun",
      icon: require("@/assets/images/uni-icon.png"),
    },
    {
      name: "MIT",
      title: "Massachusetts Institute of Technology",
      location: "Ikeja, Lagos",
      icon: require("@/assets/images/uni-icon.png"),
    },
    {
      name: "Oxford",
      title: "University of Oxford",
      location: "Ikeja, Lagos",
      icon: require("@/assets/images/uni-icon.png"),
    },
    {
      name: "Cambridge",
      title: "University of Cambridge",
      location: "Ikeja, Lagos",
      icon: require("@/assets/images/uni-icon.png"),
    },
    {
      name: "Caltech",
      title: "California Institute of Technology",
      location: "Ikeja, Lagos",
      icon: require("@/assets/images/uni-icon.png"),
    },
  ];

  const { updateFormData } = useFormContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");

  return (
    <SafeAreaView className="h-full">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        className="bg-white"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="min-h-[100%] my-auto p-[20px] flex-col justify-between">
            <View className="w-full space-y-[40px]">
              <View className="flex flex-row items-center ">
                <TouchableOpacity onPress={() => router.back()}>
                  <Image source={require("@/assets/images/back.png")} />
                </TouchableOpacity>
              </View>
              <View>
                <CustomLayout
                  title="Find Your School"
                  subtitle="Search for your school"
                >
                  <View className="space-y-10">
                    <View className="flex-1 bg-white">
                      <View className="bg-[#FAFAFA] p-2 rounded text-lg mb-4 h-[40px] flex justify-center">
                        <TextInput
                          className={`border-none ${
                            selectedUniversity && "font-[500]"
                          }`}
                          placeholder={
                            selectedUniversity || "Search Universities"
                          }
                          placeholderTextColor={`${
                            selectedUniversity ? "#000" : "#B4B4B4"
                          }`}
                          value={searchQuery}
                          onChangeText={setSearchQuery}
                        />
                      </View>
                    </View>
                    <View>
                      {universities
                        .filter((item) =>
                          item.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        )
                        .map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              setSelectedUniversity(item.title);
                              setSearchQuery("");
                            }}
                          >
                            <View className="p-3  border-b-[#716C6C] border-b-[0.3px]">
                              <View className="flex-row items-center space-x-3 ">
                                <Image source={item.icon} />
                                <View className="space-y-2">
                                  <Text className="text-black font-bold">
                                    {item.title}
                                  </Text>
                                  <Text className="text-[12px] text-[#716C6C]">
                                    {item.location}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        ))}
                    </View>
                  </View>
                </CustomLayout>
              </View>
            </View>
            <View>
              <CustomButton
                title="Continue"
                onPress={() => {
                  if (selectedUniversity) {
                    updateFormData({ university: selectedUniversity });
                    router.back();
                  }
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SchoolSelect;
