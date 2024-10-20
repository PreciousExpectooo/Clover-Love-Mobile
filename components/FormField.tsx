import { TextInput, View, Text } from "react-native";

export default function FormField({
  title,
  value,
  handleChangeText,
  otherStyles,
  type,
  placeholder,
}: any) {
  return (
    <View className="bg-white w-[95%] mx-auto rounded-[8px] my-3 flex-col justify-center p-2">
      <Text className="text-black">{title}</Text>
      <TextInput
        className="h-[30px] text-black"
        placeholder={placeholder}
        placeholderTextColor={"#000"}
      />
    </View>
  );
}
