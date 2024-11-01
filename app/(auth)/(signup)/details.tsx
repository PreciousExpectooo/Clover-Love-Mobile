import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import CustomLayout from "@/components/CustomLayout";
import FormField from "@/components/FormField";
import CustomDropdown from "@/components/CustomDropdown";
import * as ImagePicker from "expo-image-picker";
import { employmentStatusOptions } from "@/lib/data";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function ProfileDetails({ formData, updateFormData }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = useLocalSearchParams();
  useEffect(() => {
    if (params.university && params.university !== formData.university) {
      updateFormData({ university: params.university });
    }
  }, [params.university]);

  const router = useRouter();

  const handleImageSelect = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
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
      const selectedImageUri = result.assets[0].uri;
      updateFormData({ ...formData, profileImage: selectedImageUri });
    }
  };
  console.log(formData.university);

  return (
    <CustomLayout
      title="Add Profile Details"
      subtitle="Please enter your details to continue"
    >
      <View className="h-20 w-full" />
      <View className="bg-[#E65C191A] flex-col relative pt-20 rounded-[8px] mb-5">
        <View className="w-full flex justify-center items-center absolute z-10 -top-20">
          <TouchableOpacity onPress={handleImageSelect} className="relative">
            <Image
              source={
                formData.profileImage
                  ? { uri: formData.profileImage }
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
          placeholder="Enter Date of Birth"
          otherStyles="text-black"
          value={formData.dateOfBirth}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, dateOfBirth: e })
          }
        />
        <FormField
          title="Mobile"
          placeholder="Enter Mobile Number"
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
        {formData.employmentStatus === "student" && (
          <>
            <FormField
              title="Course ID (e.g Bio-Chemist)"
              placeholder="Enter Course ID"
              otherStyles="text-black"
              value={formData.courseId}
              handleChangeText={(e: any) => updateFormData({ courseId: e })}
            />
            <FormField
              title="Your Location"
              placeholder="Enter Your Location"
              otherStyles="text-black"
              value={formData.location}
              handleChangeText={(e: any) => updateFormData({ location: e })}
            />

            <TouchableOpacity onPress={() => router.push("/schoolSelect")}>
              <FormField
                title="Select University"
                placeholder={formData.university || "Enter University Name"}
                otherStyles="text-black"
                value={formData.university}
                handleChangeText={() => {}}
                editable={false}
              />
            </TouchableOpacity>
          </>
        )}
        {formData.employmentStatus === "employed" && (
          <>
            <FormField
              title="Occupation"
              placeholder="Enter Occupation"
              otherStyles="text-black"
              value={formData.occupation}
              handleChangeText={(e: any) => updateFormData({ occupation: e })}
            />
            <FormField
              title="Address"
              placeholder="Enter Your Address"
              otherStyles="text-black"
              value={formData.address}
              handleChangeText={(e: any) => updateFormData({ address: e })}
            />
          </>
        )}

        {formData.employmentStatus === "unemployed" && (
          <>
            <FormField
              title="What Skill do you have?"
              placeholder="Enter Skill"
              otherStyles="text-black"
              value={formData.skill}
              handleChangeText={(e: any) => updateFormData({ skill: e })}
            />
            <FormField
              title="Address"
              placeholder="Enter Your Address"
              otherStyles="text-black"
              value={formData.address}
              handleChangeText={(e: any) => updateFormData({ address: e })}
            />
          </>
        )}
        {formData.employmentStatus === "self-employed" && (
          <>
            <FormField
              title="Industry ID (e.g Technologist)"
              placeholder="Enter Business"
              otherStyles="text-black"
              value={formData.business}
              handleChangeText={(e: any) => updateFormData({ business: e })}
            />
            <FormField
              title="Address"
              placeholder="Enter Your Address"
              otherStyles="text-black"
              value={formData.address}
              handleChangeText={(e: any) => updateFormData({ address: e })}
            />
          </>
        )}
        {formData.employmentStatus === "retired" && (
          <>
            <FormField
              title="Address"
              placeholder="Enter Your Address"
              otherStyles="text-black"
              value={formData.address}
              handleChangeText={(e: any) => updateFormData({ address: e })}
            />
          </>
        )}
      </View>
    </CustomLayout>
  );
}
