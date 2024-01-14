import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../Navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CoffeeData from "../../assets/data/coffee";
import { cartItem } from "../../store/reducers/cart";

type Props = NativeStackScreenProps<RootStackParams, "orderhistory">;

const OrderHistory: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
  const data = CoffeeData.slice(3);
  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      <View
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row"
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 10,
            padding: 5
          }}>
          <Icon name="arrow-left" size={28} color={colors.text} />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            fontSize: 24,
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
            color: colors.text
          }}>
          Your order history
        </Text>
      </View>
      <ScrollView bounces showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                marginVertical: 5,
                backgroundColor: colors.card,
                padding: 15,
                borderRadius: 10
              }}>
              <Image
                source={item.imagelink_square}
                alt={item.name}
                style={{ height: "100%", width: "20%", borderRadius: 10, marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: colors.text }}>{item.name}</Text>
                <View
                  style={{
                    marginTop: 5,
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 14,
                      color: colors.text
                    }}>
                    Quantity - {((index + 1) % 3) + 1}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 20,
                  color: colors.notification
                }}>
                ₹{" "}
              </Text>
              <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, color: colors.text }}>
                {item.price * (((index + 1) % 3) + 1)}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default OrderHistory;
