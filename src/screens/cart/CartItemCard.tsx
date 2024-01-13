import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { addToCart, cartItemWithQuantity, removeFromCart } from "../../store/reducers/cart";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CartItemCard: React.FC<{ cartItem: cartItemWithQuantity }> = ({ cartItem }) => {
  const { item, quantity } = cartItem;
  const { colors } = useTheme();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginVertical: 5,
        backgroundColor: colors.card,
        padding: 10,
        borderRadius: 10
      }}>
      <Image
        source={item.imagelink_square}
        alt={item.name}
        style={{ height: "100%", width: "25%", borderRadius: 10, marginRight: 10 }}
      />
      <View style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
        <Text style={{ fontSize: 20, fontFamily: "Poppins-SemiBold", color: colors.text }}>{item.name}</Text>
        <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", color: colors.text }}>{item.type}</Text>
        <View
          style={{
            marginTop: 5,
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}>
          <Pressable
            onPress={() => dispatch(removeFromCart(item.id))}
            style={{
              backgroundColor: colors.primary,
              borderRadius: 10,
              padding: 5
            }}>
            <Icon name="minus" size={24} color={colors.text} />
          </Pressable>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 20,
              color: colors.text,
              textAlign: "center",
              marginHorizontal: 15
            }}>
            {quantity}
          </Text>
          <Pressable
            onPress={() => dispatch(addToCart(item))}
            style={{
              backgroundColor: colors.primary,
              borderRadius: 10,
              padding: 5
            }}>
            <Icon name="plus" size={24} color={colors.text} />
          </Pressable>
          <Text style={{ marginLeft: 15, fontFamily: "Poppins-SemiBold", fontSize: 20, color: colors.notification }}>
            ₹{" "}
          </Text>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, color: colors.text }}>
            {item.price * quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
