import { View, Text, TouchableHighlight, Image } from "react-native";
import React, { FC } from "react";
import { Link, router } from "expo-router";
import Colors from "@/constants/Colors";
import AppleStyleSwipeableRow from "./AppleStyleSwipeableRow";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface ChatRowProps {
  id: string;
  from: string;
  date: string;
  img: string;
  msg: string;
  read: boolean;
  unreadCount: number;
}

const ChatRow: FC<ChatRowProps> = ({
  id,
  from,
  date,
  img,
  msg,
  read,
  unreadCount,
}) => {
  return (
    <GestureHandlerRootView>
      <AppleStyleSwipeableRow>
        <Link
          href={{
            pathname: `/(root)/(tabs)/(messages)/${id}`,
            params: { from, img },
          }}
          asChild
        >
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={Colors.lightGray}
          >
            <View className="flex-row items-center gap-[14px]  py-[10px]">
              <Image
                source={{ uri: img }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
              <View className="flex-1">
                <Text
                  className={`text-base font-bold ${
                    read ? "text-[#888]" : "text-black"
                  }`}
                >
                  {from}
                </Text>
                <Text className={`text-[#888] ${!read && "font-bold"}`}>
                  {msg.length > 40 ? `${msg.substring(0, 40)}...` : msg}
                </Text>
              </View>
              <View>
                <Text className="text-[#888] px-[0px] self-start">
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </Link>
      </AppleStyleSwipeableRow>
    </GestureHandlerRootView>
  );
};

export default ChatRow;
