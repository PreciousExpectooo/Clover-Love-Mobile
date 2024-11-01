import React from "react";
import { View, Text, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useRef } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomDropdown = ({
  title,
  placeholder,
  onValueChange,
  options,
  value,
}: any) => {
  const pickerRef = useRef<any>(null);
  const dropdownIcon = () => {
    return <Icon name="arrow-drop-down" size={24} color="gray" />;
  };
  return (
    <View className="my-3 bg-white w-[95%] mx-auto rounded-[8px] flex flex-row justify-between items-center p-2">
      <View className="flex flex-col w-full relative">
        <Text className="text-black mb-2">{title}</Text>
        <RNPickerSelect
          ref={pickerRef}
          placeholder={placeholder}
          onValueChange={onValueChange}
          items={options}
          useNativeAndroidPickerStyle={false}
          value={value}
          Icon={dropdownIcon}
          style={{
            inputIOS: {
              width: "100%",
              position: "relative",
            },
            inputAndroid: {
              width: "100%",
            },
            iconContainer: {
              top: -10,
              position: "absolute",
            },
          }}
        />
      </View>
    </View>
  );
};

export default CustomDropdown;
