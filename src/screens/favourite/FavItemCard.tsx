import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Text } from "react-native";
import { Image, Pressable, View } from "react-native";
import { favItem, updateFavList } from "../../store/reducers/fav";
import { RootStackParams } from "../../Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cart";
import LottieView from "lottie-react-native";

const FavItemCard: React.FC<{ item: favItem }> = ({ item }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [isAddToCart, setAddToCart] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => navigation.navigate("details", item)}
        style={{
          backgroundColor: colors.card,
          padding: 10,
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          marginVertical: 5,
          marginHorizontal: 10
        }}>
        <Image source={item.imagelink_square} alt={item.name} style={{ height: 75, width: 75, borderRadius: 10 }} />
        <View style={{ marginHorizontal: 15, flex: 1, alignSelf: "center" }}>
          <Text style={{ fontSize: 16, fontFamily: "Poppins-SemiBold", color: colors.text }}>{item.name}</Text>
          <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", color: colors.text }}>{item.type}</Text>
        </View>
        {isAddToCart === false ? (
          <Pressable
            onPress={() => {
              dispatch(addToCart(item));
              setAddToCart(true);
              setTimeout(() => {
                dispatch(updateFavList(item));
              }, 499);
            }}
            style={{
              backgroundColor: colors.primary,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              elevation: 2,
              alignSelf: "center"
            }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 14, color: colors.text }}>Move to Cart</Text>
          </Pressable>
        ) : (
          <LottieView
            duration={500}
            autoPlay
            loop={false}
            source={require("../../assets/animations/check-animation.json")}
            style={{ flex: 1, backgroundColor: colors.card }}
          />
        )}
      </Pressable>
    </>
  );
};

export default FavItemCard;
