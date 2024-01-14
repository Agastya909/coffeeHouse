import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Details from "../screens/itemDetail/Details";
import { cartItem, cartItemWithQuantity } from "../store/reducers/cart";
import SplashScreen from "react-native-splash-screen";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Order from "../screens/order/Order";
import OrderHistory from "../screens/order/OrderHistory";

export type RootStackParams = {
  tabs: undefined;
  details: cartItem;
  order: cartItemWithQuantity[];
  orderhistory: undefined;
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
  const { background, isTranslucent } = useSelector((State: RootState) => State.statusBarReducer);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle={"light-content"} translucent={isTranslucent} backgroundColor={background} />
      <NavigationContainer theme={themeInfo}>
        <Stack.Navigator>
          <Stack.Screen name="tabs" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="details"
            component={Details}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="order"
            component={Order}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="orderhistory"
            component={OrderHistory}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
