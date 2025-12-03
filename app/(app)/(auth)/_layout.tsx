import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/location"
        options={{
          presentation: "formSheet",
          title: "",
          headerShadowVisible: false,
          sheetAllowedDetents: [0.7],
          sheetCornerRadius: 16,
          sheetGrabberVisible: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modal)/filter"
        options={{
          presentation: "formSheet",
          title: "",
          headerShadowVisible: false,
          sheetAllowedDetents: [0.8],
          contentStyle: {
            backgroundColor: "#fff",
          },
          sheetCornerRadius: 16,
          sheetGrabberVisible: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
