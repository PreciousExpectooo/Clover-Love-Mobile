import React from "react";
import { TextInput, View, Text } from "react-native";

export default function FormField({
  title,
  value,
  handleChangeText,
  placeholder,
  editable,
  type,
}: any) {
  return (
    <View className="bg-white w-[95%] mx-auto rounded-[8px] my-3 flex-col justify-center p-2">
      <Text className="text-black">{title}</Text>
      <TextInput
        value={value}
        onChangeText={handleChangeText}
        className="h-[30px] text-black"
        placeholder={placeholder}
        placeholderTextColor={"#A9A9A9"}
        editable={editable}
        keyboardType={type}
      />
    </View>
  );
}
