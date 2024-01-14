import { useNavigation, useTheme } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParams } from "../../Navigation";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../store/reducers/cart";

const Order: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedPaymentMethod, setPaymentMethod] = useState<string>("");
  const paymentMethods = ["Credit Cart", "Debit card", "UPI", "Net Banking", "COD"];
  const [payClick, setPayclick] = useState<boolean>(false);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <>
      {payClick ? (
        <LottieView
          autoPlay
          loop
          source={require("../../assets/animations/progress-animation.json")}
          style={{
            ...StyleSheet.absoluteFillObject,
            height: "100%",
            width: "100%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        />
      ) : null}
      {orderPlaced === false ? (
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <LottieView
            autoPlay
            loop
            source={require("../../assets/animations/order-animation.json")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-SemiBold",
              fontSize: 24,
              color: colors.text,
              marginTop: 10
            }}>
            Choose Payment Option
          </Text>
          <View
            style={{
              width: "100%",
              borderBottomColor: colors.notification,
              borderBottomWidth: 1,
              marginVertical: 10
            }}
          />
          <ScrollView style={{ flex: 1, marginTop: 10 }}>
            {paymentMethods.map((element, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setPaymentMethod(element)}
                  style={{
                    marginVertical: 5,
                    backgroundColor: colors.card,
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "row"
                  }}>
                  <View style={{ marginHorizontal: 10 }}>
                    {selectedPaymentMethod === element ? (
                      <Icon size={24} color={colors.notification} name="radiobox-marked" />
                    ) : (
                      <Icon size={24} color={colors.notification} name="radiobox-blank" />
                    )}
                  </View>
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 16,
                      color: colors.text
                    }}>
                    {element}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Pressable
            android_ripple={{
              color: "#611845"
            }}
            onPress={() => {
              if (selectedPaymentMethod.length > 0) {
                setPayclick(true);
                setTimeout(() => {
                  setPayclick(false);
                  setOrderPlaced(true);
                  dispatch(emptyCart());
                  setTimeout(() => {
                    setOrderPlaced(false);
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "tabs" }]
                    });
                  }, 2300);
                }, 1000);
              }
            }}
            style={{
              backgroundColor: colors.primary,
              borderRadius: 10,
              elevation: 2,
              justifyContent: "center",
              padding: 15,
              marginVertical: 10
            }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                color: colors.text,
                textAlign: "center"
              }}>
              Pay
            </Text>
          </Pressable>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}>
          <LottieView
            autoPlay
            source={require("../../assets/animations/check-animation.json")}
            style={{
              height: 200,
              width: 200,
              alignSelf: "center"
            }}
          />
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 32,
              color: colors.text,
              textAlign: "center"
            }}>
            Order Placed successfully
          </Text>
        </View>
      )}
    </>
  );
};

export default Order;
