import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {CategoryList} from "../CategoryList";
import RestaurantList from "../RestaurantList";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Fonts } from "@/constants/theme";

const RestaurantListPage = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: insets.top + 60 }}
      >
        <Text style={styles.pageTitle}>Restaurants</Text>
        <CategoryList />

        <Text style={styles.allRestaurantsTitle}> All restaurants </Text>
        <RestaurantList />
      </Animated.ScrollView>
    </View>
  );
};

export default RestaurantListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  allRestaurantsTitle: {
        fontSize: 20,
    fontFamily: Fonts.brandBold,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});
