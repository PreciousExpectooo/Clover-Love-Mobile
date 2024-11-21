import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomPageLayout from "@/components/CustomPageLayout";
import PillNav from "@/components/PillNav";
import { findersData, pillNavFinders } from "@/lib/data";
import LookSee from "./lookSee";
import Swipe from "./swipe";
import QuickMatch from "./quickMatch";
import Favourites from "./favourites";

export default function Page() {
  const [activeTab, setActiveTab] = useState(pillNavFinders[0]);
  return (
    <CustomPageLayout isFinders={true}>
      <View className="mt-[20px]">
        <PillNav
          navData={pillNavFinders}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        {activeTab === pillNavFinders[0] && (
          <LookSee findersData={findersData} />
        )}
        {activeTab === pillNavFinders[1] && <Swipe />}
        {activeTab === pillNavFinders[2] && <QuickMatch />}
        {activeTab === pillNavFinders[3] && <Favourites />}
      </View>
      <StatusBar style="auto" />
    </CustomPageLayout>
  );
}
