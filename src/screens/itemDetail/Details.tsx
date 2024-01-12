import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParams } from "../../Navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParams, "details">;

const Details: React.FC<Props> = ({ route, navigation }) => {
  const { name, imagelink_portrait, description, ingredients, roasted, price } = route.params;
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      {/* back btn */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 5,
          zIndex: 2
        }}>
        <Icon name="arrow-left-thin" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // add to fav page
        }}
        style={{
          position: "absolute",
          top: 15,
          right: 15,
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 5,
          zIndex: 2
        }}>
        <Icon name="heart" size={24} color={"#FF6666"} />
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
            Price
          </Text>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, color: colors.text, textAlign: "center" }}>
            ₹ {price}
          </Text>
        </View>
        {/* reaplace this with a plus minus sign to add or remove */}
        <Pressable
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
      </View>
    </View>
  );
};

export default Details;
