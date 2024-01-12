import React from "react";
import { Image, ImageSourcePropType, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParams } from "../../Navigation/index";

type Props = {
  id: string;
  name: string;
  description: string;
  roasted?: string;
  imagelink_square: ImageSourcePropType;
  imagelink_portrait: ImageSourcePropType;
  ingredients: string;
  special_ingredient: string;
  price: number;
  average_rating: number;
  ratings_count: number;
  favourite: boolean;
  type: string;
  index: number;
};

const ItemCard: React.FC<{ item: Props }> = ({ item }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const { colors } = useTheme();
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
      <Text style={{ fontFamily: "Poppins-Regular", fontSize: 12, color: colors.border, fontStyle: "italic" }}>
        {item.special_ingredient}
      </Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
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
      <TouchableOpacity
        style={{ position: "absolute", right: 10, bottom: 10, backgroundColor: colors.primary, borderRadius: 5 }}>
        <Icon name="plus" size={28} color={colors.text} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ItemCard;
