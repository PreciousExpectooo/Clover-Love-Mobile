import * as React from "react";
import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  Text,
  ActivityIndicator,
} from "react-native";
import CustomLayout from "@/components/CustomLayout";
import FormField from "@/components/FormField";
import CustomDropdown from "@/components/CustomDropdown";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { employmentStatusOptions } from "@/lib/data";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";

export default function ProfileDetails({ formData, updateFormData }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const router = useRouter();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(
    formData.dateOfBirth ? new Date(formData.dateOfBirth) : new Date()
  );

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-GB");
      setDate(selectedDate);
      updateFormData({ ...formData, dateOfBirth: formattedDate });
    }
  };
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
          type="default"
        />
        <FormField
          title="Email Address"
          placeholder="kizitodonpedro@gmail.com"
          otherStyles="text-black"
          type="email-address"
          value={formData.email}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, email: e })
          }
        />
        <View>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            className="z-10 w-full"
          >
            <FormField
              title="Date of Birth"
              placeholder={formData.dateOfBirth || "Enter Date of Birth"}
              otherStyles="text-black"
              value={formData.dateOfBirth}
              handleChangeText={() => {}}
              editable={false}
            />
          </TouchableOpacity>

          {showDatePicker && (
            <View>
              <View className="w-full flex justify-end items-end px-3 mt-2">
                <TouchableOpacity onPress={() => setShowDatePicker(false)}>
                  <Text className="text-[#640D6B] font-bold text-md">Done</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={date}
                textColor="#A9A9A9"
                mode="date"
                display={Platform.OS === "ios" ? "inline" : "default"}
                onChange={(event, selectedDate) => {
                  if (selectedDate) {
                    const formattedDate =
                      selectedDate.toLocaleDateString("en-GB");
                    setDate(selectedDate);
                    updateFormData({ ...formData, dateOfBirth: formattedDate });
                    if (Platform.OS === "android") {
                      setShowDatePicker(false);
                    }
                  }
                }}
                themeVariant="light"
                accentColor="#640D6B"
                style={{ width: "100%" }}
              />
            </View>
          )}
        </View>
        <FormField
          title="Mobile"
          placeholder="Enter Mobile Number"
          otherStyles="text-black"
          value={formData.mobileNo}
          handleChangeText={(e: any) =>
            updateFormData({ ...formData, mobileNo: e })
          }
          type="phone-pad"
        />

        <CustomDropdown
          title="Employment Status"
          placeholder={{ label: "Select Employment Status", value: null }}
          onValueChange={(value: any) =>
            updateFormData({ ...formData, employmentStatus: value })
          }
          className="w-full z-10"
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

            <TouchableOpacity
              className="relative w-full z-10"
              onPress={async () => {
                setLocationLoading(true);
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setLocationLoading(false);
                  alert("Permission to access location was denied");
                  return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const address = await Location.reverseGeocodeAsync({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                });

                if (address[0]) {
                  const locationString = `${address[0].city}, ${address[0].region}, ${address[0].country}`;
                  updateFormData({ ...formData, location: locationString });
                }
                setLocationLoading(false);
              }}
            >
              <FormField
                title="Enter Location"
                placeholder="Enter Location"
                otherStyles="text-black"
                value={formData.location}
                handleChangeText={() => {}}
                editable={false}
              />
              {locationLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#000"
                  className="absolute right-4 top-[40%]"
                />
              ) : (
                <Image
                  source={require("../../../assets/images/location.png")}
                  className="absolute right-4 top-[40%] w-5 h-5"
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              className="z-10"
              onPress={() => router.push("/schoolSelect")}
            >
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
            <TouchableOpacity
              className="relative w-full z-10"
              onPress={async () => {
                setLocationLoading(true);
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setLocationLoading(false);
                  alert("Permission to access location was denied");
                  return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const address = await Location.reverseGeocodeAsync({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                });

                if (address[0]) {
                  const locationString = `${address[0].city}, ${address[0].region}, ${address[0].country}`;
                  updateFormData({ ...formData, location: locationString });
                }
                setLocationLoading(false);
              }}
            >
              <FormField
                title="Enter Location"
                placeholder="Enter Location"
                otherStyles="text-black"
                value={formData.location}
                handleChangeText={() => {}}
                editable={false}
              />
              {locationLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#000"
                  className="absolute right-4 top-[40%]"
                />
              ) : (
                <Image
                  source={require("../../../assets/images/location.png")}
                  className="absolute right-4 top-[40%] w-5 h-5"
                />
              )}
            </TouchableOpacity>
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
            <TouchableOpacity
              className="relative w-full z-10"
              onPress={async () => {
                setLocationLoading(true);
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setLocationLoading(false);
                  alert("Permission to access location was denied");
                  return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const address = await Location.reverseGeocodeAsync({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                });

                if (address[0]) {
                  const locationString = `${address[0].city}, ${address[0].region}, ${address[0].country}`;
                  updateFormData({ ...formData, location: locationString });
                }
                setLocationLoading(false);
              }}
            >
              <FormField
                title="Enter Location"
                placeholder="Enter Location"
                otherStyles="text-black"
                value={formData.location}
                handleChangeText={() => {}}
                editable={false}
              />
              {locationLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#000"
                  className="absolute right-4 top-[40%]"
                />
              ) : (
                <Image
                  source={require("../../../assets/images/location.png")}
                  className="absolute right-4 top-[40%] w-5 h-5"
                />
              )}
            </TouchableOpacity>
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
            <TouchableOpacity
              className="relative w-full z-10"
              onPress={async () => {
                setLocationLoading(true);
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setLocationLoading(false);
                  alert("Permission to access location was denied");
                  return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const address = await Location.reverseGeocodeAsync({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                });

                if (address[0]) {
                  const locationString = `${address[0].city}, ${address[0].region}, ${address[0].country}`;
                  updateFormData({ ...formData, location: locationString });
                }
                setLocationLoading(false);
              }}
            >
              <FormField
                title="Enter Location"
                placeholder="Enter Location"
                otherStyles="text-black"
                value={formData.location}
                handleChangeText={() => {}}
                editable={false}
              />
              {locationLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#000"
                  className="absolute right-4 top-[40%]"
                />
              ) : (
                <Image
                  source={require("../../../assets/images/location.png")}
                  className="absolute right-4 top-[40%] w-5 h-5"
                />
              )}
            </TouchableOpacity>
          </>
        )}
        {formData.employmentStatus === "retired" && (
          <>
            <TouchableOpacity
              className="relative w-full z-10"
              onPress={async () => {
                setLocationLoading(true);
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setLocationLoading(false);
                  alert("Permission to access location was denied");
                  return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const address = await Location.reverseGeocodeAsync({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                });

                if (address[0]) {
                  const locationString = `${address[0].city}, ${address[0].region}, ${address[0].country}`;
                  updateFormData({ ...formData, location: locationString });
                }
                setLocationLoading(false);
              }}
            >
              <FormField
                title="Enter Location"
                placeholder="Enter Location"
                otherStyles="text-black"
                value={formData.location}
                handleChangeText={() => {}}
                editable={false}
              />
              {locationLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#000"
                  className="absolute right-4 top-[40%]"
                />
              ) : (
                <Image
                  source={require("../../../assets/images/location.png")}
                  className="absolute right-4 top-[40%] w-5 h-5"
                />
              )}
            </TouchableOpacity>
          </>
        )}
      </View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
}
