import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";
import { Link } from "expo-router";

interface RestaurantHeaderProps {
  title?: string;
  scrollOffset?: SharedValue<number>;
}

const SCROLL_THRESHOLD = 60;

const RestaurantHeader = ({ title, scrollOffset }: RestaurantHeaderProps) => {
  const insets = useSafeAreaInsets();

  const headerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD * 0.6],
      [1, 0],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD * 0.6],
      [0, -10],
      Extrapolation.CLAMP
    )

    return { opacity, transform: [{ translateY }], };
  }); 
  
    const header2Style = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [SCROLL_THRESHOLD * 0.3, SCROLL_THRESHOLD ],
      [0, 1],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD * 0.6],
      [-10, 0],
      Extrapolation.CLAMP
    )

    return { opacity, transform: [{ translateY }], };
  }); 

    const shadowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD],
      [0, 1],
      Extrapolation.CLAMP
    );

    return {
      shadowOpacity: opacity * 0.1,
      elevation: opacity * 4,
    };
  });
  return (
    <Animated.View style={[styles.headerContainer, { paddingTop: insets.top }, shadowStyle ]}>
      {/* Header Container 1 */}
      <Animated.View style={[styles.header1, headerStyle]}>
        <Link href="/(app)/(auth)/(modal)/location" asChild>
          <TouchableOpacity style={styles.locationButton}>
            <View>
              <Ionicons name="business-outline" size={16} />
            </View>
            <Text style={styles.locationText}>Munster</Text>
            <Ionicons name="chevron-down-outline" size={16} />
          </TouchableOpacity>
        </Link>
        <View style={styles.rightIcons}>
          <Link href="/(app)/(auth)/(modal)/filter" asChild>
            <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
              <Ionicons name="filter" size={20} />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
            <Ionicons name="map-outline" size={20} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Header 2 */}
      <Animated.View style={[styles.header2, header2Style]}>
        <View style={styles.centerContent}>
          <Text style={styles.titleSmall}>{title}</Text>
          <Link href="/(app)/(auth)/(modal)/location" asChild>
            <TouchableOpacity style={styles.locationSmall}>
              <Text style={styles.locationSmallText}>Munster</Text>
              <Ionicons name="chevron-down-outline" size={14} />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.rightIcons}>
          <Link href="/(app)/(auth)/(modal)/filter" asChild>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="filter" size={20} />
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 100,
    // boxShadow: '0px 2px 4px -2px rgba(0, 0, 0, 0.2)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  header1: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationText: {
    marginHorizontal: 8,
    fontWeight: "600",
    fontSize: 16,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    gap: 6,
  },
  rightIcons: {
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light,
    borderRadius: 20,
  },
  header2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 40,
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  locationSmall: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationSmallText: {
    fontSize: 12,
    color: Colors.muted,
  },
});

export default RestaurantHeader;
