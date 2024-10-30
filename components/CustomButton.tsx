import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, title, className }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-[#640D6B] h-[54px] flex-row items-center justify-center rounded-[8px] ${className}`}
    >
      <Text className="text-white text-[16px] font-[700]">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
