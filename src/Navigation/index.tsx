import React from "react";
import { ImageSourcePropType, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Details from "../screens/itemDetail/Details";
import { cartItem } from "../store/reducers/cart";

export type RootStackParams = {
  tabs: undefined;
  details: cartItem;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const themeInfo = {
  dark: true,
  colors: {
    background: "#121212",
    card: "#242424",
    border: "#Bfbfbf",
    text: "#FFFFFF",
    primary: "#511845",
    notification: "#FA7D09"
  }
};
const RootNavigator: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={"#121212"} barStyle={"light-content"} />
      <NavigationContainer theme={themeInfo}>
        <Stack.Navigator>
          <Stack.Screen name="tabs" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="details"
            component={Details}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
