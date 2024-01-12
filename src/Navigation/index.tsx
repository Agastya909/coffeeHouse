import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const themeInfo = {
  dark: true,
  colors: {
    background: "#121212",
    card: "#2D2D2D",
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
