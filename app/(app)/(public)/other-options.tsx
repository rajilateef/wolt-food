import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Fonts } from "@/constants/theme";
import { Link, useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import useUserStore from "@/hooks/use-userstore";

const OtherOptions = () => {
  const router = useRouter();
  const {setIsGuest} = useUserStore();

  const continueAsGuest = () => {
    setIsGuest(true)
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => router.dismiss()}
      >
        <Ionicons name="close" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>Log in or create a Wolt account</Text>

      {/* Login Buttons */}
      <View style={styles.buttonContainer}>
        <Animated.View entering={FadeInDown.delay(100)}>
          <AppleAuthButton />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200)}>
          <GoogleAuthButton />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)}>
          <TouchableOpacity style={styles.otherButton} onPress={continueAsGuest}>
            <Text style={styles.otherButtonText}>Continue as guest</Text>
          </TouchableOpacity>
        </Animated.View>
       
      </View>
    </View>
  );
};

export default OtherOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  closeBtn: {
    backgroundColor: Colors.light,
    borderRadius: 40,
    padding: 8,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    marginVertical: 22,
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
  },
    otherButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
  },
});
