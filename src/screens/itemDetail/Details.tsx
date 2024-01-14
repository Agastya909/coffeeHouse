import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Image, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { RootStackParams } from "../../Navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateFavList } from "../../store/reducers/fav";
import { addToCart, removeFromCart } from "../../store/reducers/cart";
import { setTranslucent, unSetTranslucent } from "../../store/reducers/statusBar";
import { RootState } from "../../store/store";
import { TextBox } from "../../component/TextBox";

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
            <TextBox textBody={name} fontSize={32} fontFamily="Poppins-SemiBold" />
            <TextBox textBody={ingredients} fontSize={14} />
          </View>
          {roasted !== undefined ? (
            <View style={{ backgroundColor: colors.card, padding: 10, borderRadius: 10 }}>
              <TextBox textBody={roasted} fontSize={14} color={colors.border} />
            </View>
          ) : null}
        </View>
        {/* desc */}
        <View
          style={{
            margin: 10
          }}>
          <TextBox textBody="Description" fontFamily="Poppins-SemiBold" />
          <TextBox textBody={description} fontSize={14} />
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
          <TextBox
            textBody={cartCount === 0 ? "Price" : "Total Amount"}
            fontSize={12}
            fontFamily="Poppins-SemiBold"
            textAlign="center"
          />
          <TextBox
            textBody={`₹ ${cartCount === 0 ? price : price * cartCount}`}
            fontSize={18}
            fontFamily="Poppins-SemiBold"
            textAlign="center"
          />
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
            <TextBox textBody="Add to Cart" textAlign="center" fontFamily="Poppins-SemiBold" />
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
            <View style={{ marginHorizontal: 20 }}>
              <TextBox textBody={String(cartCount)} textAlign="center" fontFamily="Poppins-SemiBold" fontSize={20} />
            </View>
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
