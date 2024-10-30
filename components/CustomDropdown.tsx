import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useRef } from "react";

const CustomDropdown = ({
  title,
  placeholder,
  onValueChange,
  options,
  value,
}: any) => {
  const pickerRef = useRef<any>(null);
  return (
    <View className="my-3 bg-white w-[95%] mx-auto rounded-[8px] flex flex-row justify-between items-center p-2">
      <View className="flex flex-col">
        <TouchableWithoutFeedback
          onPress={() => pickerRef.current.togglePicker()}
        >
          <Text className="text-black mb-2">{title}</Text>
        </TouchableWithoutFeedback>
        <RNPickerSelect
          ref={pickerRef}
          placeholder={placeholder}
          onValueChange={onValueChange}
          items={options}
          value={value}
          style={{
            inputIOS: {
              width: "100%",
            },
            inputAndroid: {
              width: "100%",
            },
          }}
        />
      </View>
      <TouchableOpacity onPress={() => pickerRef.current.togglePicker()}>
        <Image source={require("../assets/images/dropdown.png")} />
      </TouchableOpacity>
    </View>
  );
};

{
  /*   */
}

export default CustomDropdown;
