import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParams } from "../../Navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateFavList } from "../../store/reducers/fav";
import { addToCart, removeFromCart, emptyCart } from "../../store/reducers/cart";
import { setTranslucent, unSetTranslucent } from "../../store/reducers/statusBar";
import { RootState } from "../../store/store";

type Props = NativeStackScreenProps<RootStackParams, "details">;

const Details: React.FC<Props> = ({ route, navigation }) => {
  useEffect(() => {
    dispatch(setTranslucent());
    return () => {
      dispatch(unSetTranslucent());
    };
  }, []);
  const { name, imagelink_portrait, description, ingredients, roasted, price } = route.params;
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.cartReducer.itemList);
  const favItem = useSelector((state: RootState) => state.favItemReducer.itemList);
  const isTranslucent = useSelector((state: RootState) => state.statusBarReducer.isTranslucent);
  const cartCount = cartItem.reduce((count, item) => {
    if (item.item.id === route.params.id) {
      return count + item.quantity;
    }
    return count;
  }, 0);
  const isItemInFavList = favItem.some(item => item.id === route.params.id);

  return (
    <View style={{ flex: 1 }}>
      {/* back btn */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: isTranslucent ? 30 : 15,
          left: isTranslucent ? 30 : 15,
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 5,
          zIndex: 2
        }}>
        <Icon name="arrow-left-thin" size={24} color={colors.text} />
      </TouchableOpacity>
      {/* fav item */}
      <TouchableOpacity
        onPress={() => dispatch(updateFavList(route.params))}
        style={{
          position: "absolute",
          top: isTranslucent ? 30 : 15,
          right: isTranslucent ? 30 : 15,
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 5,
          zIndex: 2
        }}>
        <Icon name="heart" size={24} color={isItemInFavList ? "#FF6666" : "#FFFFFF"} />
      </TouchableOpacity>
      <ScrollView bounces style={{ flex: 1 }}>
        {/* image */}
        <Image source={imagelink_portrait} alt={name} style={{ width: "100%", height: 460 }} />
        {/* general info */}
        <View
          style={{
            margin: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 28, color: colors.text, marginTop: 5 }}>
              {name}
            </Text>
            <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}>{ingredients}</Text>
          </View>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: colors.card,
              borderRadius: 10
            }}>
            {roasted}
          </Text>
        </View>
        {/* desc */}
        <View
          style={{
            margin: 10
          }}>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16, color: colors.text }}>Description</Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14, color: colors.text }}>{description}</Text>
        </View>
      </ScrollView>
      <View
        style={{
          margin: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
        <View style={{ width: "40%" }}>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 12, color: colors.text, textAlign: "center" }}>
            {cartCount === 0 ? "Price" : "Total Amount"}
          </Text>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, color: colors.text, textAlign: "center" }}>
            ₹ {cartCount === 0 ? price : price * cartCount}
          </Text>
        </View>

        {cartCount === 0 ? (
          <Pressable
            onPress={() => dispatch(addToCart(route.params))}
            style={{
              backgroundColor: colors.primary,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              elevation: 2,
              flex: 1
            }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16, color: colors.text, textAlign: "center" }}>
              Add to cart
            </Text>
          </Pressable>
        ) : (
          <View
            style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Pressable
              onPress={() => dispatch(removeFromCart(route.params.id))}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 10,
                padding: 5
              }}>
              <Icon name="minus" size={28} color={colors.text} />
            </Pressable>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 20,
                color: colors.text,
                textAlign: "center",
                marginHorizontal: 20
              }}>
              {cartCount}
            </Text>
            <Pressable
              onPress={() => dispatch(addToCart(route.params))}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 10,
                padding: 5
              }}>
              <Icon name="plus" size={28} color={colors.text} />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Details;
