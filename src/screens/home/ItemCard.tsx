import React from "react";
import { Image, ImageSourcePropType, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParams } from "../../Navigation/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateFavList, favItem } from "../../store/reducers/fav";
import { addToCart, removeFromCart } from "../../store/reducers/cart";

type Props = favItem;

const ItemCard: React.FC<{ item: Props }> = ({ item }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const { colors } = useTheme();
  const cartItems = useSelector((state: RootState) => state.cartReducer.itemList);
  const itemIndex = cartItems.findIndex(el => el.item.id === item.id);
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => navigation.navigate("details", item)}
      style={{
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: colors.card
      }}>
      <View>
        <Image source={item.imagelink_square} alt={item.name} style={{ height: 150, width: 150, borderRadius: 10 }} />
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 0,
            paddingVertical: 4,
            paddingHorizontal: 8
          }}>
          <Text style={{ color: colors.text, fontFamily: "Poppins-Regular" }}>{item.average_rating}</Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 16,
          marginTop: 10,
          color: colors.text,
          fontWeight: "600"
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 12,
          color: colors.border,
          fontStyle: "italic",
          marginTop: 5
        }}>
        {item.special_ingredient}
      </Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 15, justifyContent: "space-between" }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 16,
              color: colors.notification,
              fontWeight: "800",
              marginRight: 2
            }}>
            ₹
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16, color: colors.border }}>{item.price}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: colors.notification,
            alignItems: "center"
          }}>
          {itemIndex >= 0 ? (
            <>
              <TouchableOpacity style={{ padding: 2 }} onPress={() => dispatch(removeFromCart(item.id))}>
                <Icon name="minus" size={22} color={colors.text} />
              </TouchableOpacity>
              <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", paddingHorizontal: 3 }}>
                {cartItems[itemIndex].quantity}
              </Text>
            </>
          ) : null}
          <TouchableOpacity style={{ padding: 2 }} onPress={() => dispatch(addToCart(item))}>
            <Icon name="plus" size={22} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemCard;
