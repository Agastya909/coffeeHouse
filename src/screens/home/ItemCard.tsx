import React from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParams } from "../../Navigation/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { cartItem } from "../../store/reducers/cart";
import { addToCart, removeFromCart } from "../../store/reducers/cart";
import { TextBox } from "../../component/TextBox";

type Props = cartItem;

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
          <TextBox textBody={String(item.average_rating)} fontSize={14} />
        </View>
      </View>
      <TextBox textBody={item.name} fontFamily="Poppins-SemiBold" marginTop={10} />
      <TextBox
        textBody={item.special_ingredient}
        marginTop={5}
        fontSize={12}
        fontStyle="italic"
        color={colors.border}
      />
      <View style={{ display: "flex", flexDirection: "row", marginTop: 15, justifyContent: "space-between" }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TextBox textBody="₹" color={colors.notification} marginRight={5} fontFamily="Poppins-SemiBold" />
          <TextBox textBody={String(item.price)} marginRight={5} />
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
              <View style={{ paddingHorizontal: 4 }}>
                <TextBox textBody={String(cartItems[itemIndex].quantity)} fontSize={14} />
              </View>
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
