import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="restaurants"
        options={{ title: "Restaurants", headerShown: false, tabBarIcon: ({color, size}) => (
            <MaterialIcons name="restaurant" color={color} size={size} />
        )}}
      />
      <Tabs.Screen name="discovery" options={{ title: "Discovery", tabBarIcon: ({color, size, focused}) => (
            <Ionicons name={focused ? "compass" : "compass-outline"} color={color} size={size} />
        )}} />
      <Tabs.Screen
        name="stores"
        options={{ title: "Stores", headerShown: false, tabBarIcon: ({color, size, focused}) => (
            <Ionicons name={focused ? "storefront" : "storefront-outline"} color={color} size={size} />
        )}}
      />
      <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: ({color, size, focused}) => (
            <Ionicons name={focused ? "search" : "search-outline"} color={color} size={size} />
        )}} />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false, tabBarIcon: ({color, size, focused}) => (
            <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />
        )}}
      />
    </Tabs>
  );
};

export default Layout;
