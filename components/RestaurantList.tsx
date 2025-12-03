import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useRestaurants } from "@/hooks/useRestaurants";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";


const RestaurantList = () => {
  const { data: restaurants, isLoading, isError } = useRestaurants();
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <>
      {restaurants?.map((restaurant) => (
        <View key={restaurant.id}>
          <TouchableOpacity style={styles.card}>
            <Image source={restaurant?.image!} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{restaurant.name}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {restaurant.description}
              </Text>
            </View>
            <View style={styles.metadata}>
                <Ionicons name="bicycle-outline" size={16} color={'#666'}/>
                <Text style={styles.metadataText}>${restaurant.deliveryFee.toFixed(2)}</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.metadataText}>$$$</Text>
                <Text style={styles.dot}>•</Text>
                <Ionicons name="happy-outline" size={16} color={'#666'}/>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    boxShadow: "0px 4px 2px -2px rgba(0,0,0, 0.2)",
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.light,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  metadata: {
    borderTopColor: Colors.light, 
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 10,
  },
  metadataText: {
    fontSize: 14,
    color: "#666",
  },
  dot: {
    color: '#999',
    fontSize: 13,
  }
});

export default RestaurantList;
