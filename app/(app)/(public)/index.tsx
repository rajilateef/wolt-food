import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Fonts } from "@/constants/theme";
import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import SmoothInfiniteScroll from "@/components/SmoothInfiniteScroll";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const Index = () => {
  const openWebBrowser = () => {
    Linking.openURL("https://wolt.com/en/privacy");
  };
  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandLogo}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>
        {/* Login Buttons */}
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <Link href={"/(app)/(public)/other-options"} asChild>
              <TouchableOpacity style={styles.otherButton}>
                <Text style={styles.otherButtonText}>Other Options</Text>
              </TouchableOpacity>
            </Link>
          </Animated.View>
        </View>

        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            Please visit{" "}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt Privacy Statement
            </Text>{" "}
            to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 38,
    paddingVertical: 20,
  },
  brandLogo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 16,
  },
  tagline: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 36,
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
  },
  otherButton: {
    backgroundColor: "#dfdfdfff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "600",
  },
  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: {
    color: "#4285F4",
    textDecorationLine: "underline",
  },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
