import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import FormField from "@/components/FormField";
import React from "react";
import CustomLayout from "@/components/CustomLayout";
import * as ImagePicker from "expo-image-picker";
import CustomDropdown from "@/components/CustomDropdown";
import { employmentStatusOptions } from "@/lib/data";

export default function ProfileDetails({ formData, updateFormData }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri as any);
    }
  };
  return (
    <CustomLayout
      title="Add Profile Details"
      subtitle="Please enter your details to continue"
    >
      <View className="h-20 w-full" />
      <View className="bg-[#E65C191A] flex-col relative pt-20 rounded-[8px] mb-5">
        <View className="w-full flex justify-center items-center absolute z-10 -top-20">
          <TouchableOpacity onPress={handleImageSelect}>
            <Image
              source={
                selectedImage
                  ? { uri: selectedImage }
                  : require("../../../assets/images/details.png")
              }
              style={{ width: 150, height: 150, borderRadius: 8 }}
            />
          </TouchableOpacity>
        </View>
        <FormField
          title="Name"
          placeholder="Kizito Don-Pedro"
          otherStyles="text-black"
          value={formData.name}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, name: e })
          }
        />
        <FormField
          title="Email Address"
          placeholder="kizitodonpedro@gmail.com"
          otherStyles="text-black"
          value={formData.email}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, email: e })
          }
        />
        <FormField
          title="Date of Birth"
          placeholder="Kizito Don-Pedro"
          otherStyles="text-black"
          value={formData.dateOfBirth}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, dateOfBirth: e })
          }
        />
        <FormField
          title="Mobile"
          placeholder="Kizito Don-Pedro"
          otherStyles="text-black"
          value={formData.mobileNo}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, mobileNo: e })
          }
        />

        <CustomDropdown
          title="Employment Status"
          placeholder={{ label: "Select Employment Status", value: null }}
          onValueChange={(value: any) =>
            updateFormData({ ...formData, employmentStatus: value })
          }
          value={formData.employmentStatus}
          options={employmentStatusOptions}
        />

        <FormField
          title="Occupation"
          placeholder="Kizito Don-Pedro"
          otherStyles="text-black"
          value={formData.occupation}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, occupation: e })
          }
        />
        <FormField
          title="Address"
          placeholder="Kizito Don-Pedro"
          otherStyles="text-black"
          value={formData.address}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, address: e })
          }
        />
      </View>
    </CustomLayout>
  );
}
