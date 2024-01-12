import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/home/Home";
import Cart from "../screens/cart/Cart";
import Profile from "../screens/profile/Profile";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fav from "../screens/favourite/Fav";

const BottomTabNavigator = createBottomTabNavigator();

const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderColor: colors.background
        },
        tabBarIcon: ({ focused }) => {
          const routeName = route.name;
          if (routeName === "home") {
            return (
              <View>
                <Icon name="home-variant" size={24} color={focused ? colors.notification : colors.text} />
              </View>
            );
          } else if (routeName === "cart") {
            return (
              <View>
                <Icon name="shopping" size={24} color={focused ? colors.notification : colors.text} />
              </View>
            );
          } else if (routeName === "fav") {
            return (
              <View>
                <Icon name="heart" size={24} color={focused ? colors.notification : colors.text} />
              </View>
            );
          } else if (routeName === "profile") {
            return (
              <View>
                <Icon name="account" size={24} color={focused ? colors.notification : colors.text} />
              </View>
            );
          }
        }
      })}>
      <BottomTabNavigator.Screen name="home" component={Home} />
      <BottomTabNavigator.Screen name="cart" component={Cart} />
      <BottomTabNavigator.Screen name="fav" component={Fav} />
      <BottomTabNavigator.Screen name="profile" component={Profile} />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTabs;
