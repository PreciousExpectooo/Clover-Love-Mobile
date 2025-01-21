import { useLocalSearchParams, router } from "expo-router";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  SystemMessage,
  IMessage,
} from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import messageData from "@/assets/data/messages.json";
import ChatMessageBox from "@/components/ChatMessageBox";
import ReplyMessageBar from "@/components/ReplyMessageBar";

const Page = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const insets = useSafeAreaInsets();
  const { from, img } = useLocalSearchParams();
  const [replyMessage, setReplyMessage] = useState<IMessage | null>(null);
  const swipeableRowRef = useRef<Swipeable | null>(null);

  useEffect(() => {
    setMessages([
      ...messageData.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from ? "You" : "Bob",
          },
        };
      }),
      {
        _id: 0,
        system: true,
        text: "All your base are belong to us",
        createdAt: new Date(),
        user: {
          _id: 0,
          name: "Bot",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any[]) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderInputToolbar = (props: any) => (
    <InputToolbar
      {...props}
      containerStyle={{ backgroundColor: Colors.background }}
      renderActions={() => (
        <View style={styles.actionContainer}>
          <Ionicons name="add" color={Colors.primary} size={28} />
        </View>
      )}
    />
  );

  const updateRowRef = useCallback(
    (ref: any) => {
      if (
        ref &&
        replyMessage &&
        ref.props.children.props.currentMessage?._id === replyMessage._id
      ) {
        swipeableRowRef.current = ref;
      }
    },
    [replyMessage]
  );

  useEffect(() => {
    if (replyMessage && swipeableRowRef.current) {
      swipeableRowRef.current.close();
      swipeableRowRef.current = null;
    }
  }, [replyMessage]);

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <View className="flex-row justify-between items-center px-4 py-2 bg-[Colors.background]">
        <View className="flex-row items-center space-x-1">
          <Ionicons
            onPress={() => router.back()}
            name="chevron-back-outline"
            color={Colors.primary}
            size={30}
          />
          <View className="flex-row items-center gap-2">
            <Image source={{ uri: img }} className="w-10 h-10 rounded-full" />
            <Text className="text-lg font-medium">{from}</Text>
          </View>
        </View>

        <View className="flex-row gap-8">
          <TouchableOpacity>
            <Ionicons
              name="videocam-outline"
              color={Colors.primary}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call-outline" color={Colors.primary} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        onInputTextChanged={setText}
        user={{ _id: 1 }}
        renderSystemMessage={(props) => (
          <SystemMessage {...props} textStyle={{ color: Colors.gray }} />
        )}
        bottomOffset={insets.bottom}
        renderAvatar={null}
        maxComposerHeight={100}
        textInputProps={styles.composer}
        renderBubble={(props) => (
          <Bubble
            {...props}
            textStyle={{
              right: { color: "#fff" },
              left: { color: "#640d6b" },
            }}
            wrapperStyle={{
              left: { backgroundColor: "#fff" },
              right: { backgroundColor: "#640d6b" },
            }}
          />
        )}
        renderSend={(props) => (
          <View style={styles.sendContainer}>
            {text === "" && (
              <>
                <Ionicons
                  name="camera-outline"
                  color={Colors.primary}
                  size={28}
                />
                <Ionicons name="mic-outline" color={Colors.primary} size={28} />
              </>
            )}
            {text !== "" && (
              <Send {...props} containerStyle={{ justifyContent: "center" }}>
                <Ionicons name="send" color={Colors.primary} size={28} />
              </Send>
            )}
          </View>
        )}
        renderInputToolbar={renderInputToolbar}
        renderChatFooter={() => (
          <ReplyMessageBar
            clearReply={() => setReplyMessage(null)}
            message={replyMessage}
          />
        )}
        onLongPress={(context, message) => setReplyMessage(message)}
        renderMessage={(props) => (
          <ChatMessageBox
            {...props}
            setReplyOnSwipeOpen={setReplyMessage}
            updateRowRef={updateRowRef}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  actionContainer: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    left: 5,
  },
  sendContainer: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: 14,
  },
  composer: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 16,
    marginVertical: 4,
  },
});

export default Page;
