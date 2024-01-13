import { useTheme } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartItemCard from "./CartItemCard";

const Cart: React.FC = () => {
  const { colors } = useTheme();
  const cartItem = useSelector((state: RootState) => state.cartReducer.itemList);
  const totalAmount = cartItem.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.item.price;
  }, 0);

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <LottieView
        loop
        autoPlay
        source={require("../../assets/animations/cart-animation.json")}
        style={{ height: 75, width: 75, alignSelf: "center", marginTop: 20 }}
      />
      {cartItem.length > 0 ? (
        <>
          <FlatList
            data={cartItem}
            renderItem={({ index, item }) => <CartItemCard cartItem={item} key={index} />}
            style={{ marginTop: 10, flex: 1 }}
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ width: "40%" }}>
              <Text style={{ fontSize: 16, fontFamily: "Poppins-Regular", color: colors.text, textAlign: "center" }}>
                Total Amount
              </Text>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{ marginLeft: 10, fontFamily: "Poppins-SemiBold", fontSize: 20, color: colors.notification }}>
                  ₹{" "}
                </Text>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, color: colors.text }}>{totalAmount}</Text>
              </View>
            </View>
            <Pressable
              // onPress={() => dispatch(addToCart(route.params))}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 10,
                elevation: 2,
                flex: 1,
                justifyContent: "center"
              }}>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 16,
                  color: colors.text,
                  textAlign: "center"
                }}>
                Proceed to checkout
              </Text>
            </Pressable>
          </View>
        </>
      ) : (
        <LottieView
          loop
          autoPlay
          source={require("../../assets/animations/empty-cart-animation.json")}
          style={{ height: 250, width: 250, alignSelf: "center", flex: 1 }}
        />
      )}
    </View>
  );
};

export default Cart;
