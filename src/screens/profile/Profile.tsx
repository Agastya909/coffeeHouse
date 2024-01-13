import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      <Image
        source={require("../../assets/images/profile.png")}
        alt={"Agastya"}
        style={{ height: 200, width: 200, borderRadius: 100, alignSelf: "center", marginTop: 50 }}
      />
      <Text
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: 32,
          color: colors.text,
          marginTop: 20,
          alignSelf: "center"
        }}>
        Agastya
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 16,
          alignSelf: "center"
        }}>
        +91-9571336544
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 15,
          alignSelf: "center"
        }}>
        FirstnameLastname@gmail.com
      </Text>
      <ScrollView bounces showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: colors.card,
              borderRadius: 10,
              width: "100%",
              marginTop: 15,
              padding: 15
            }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}>
              <Icon name="shopping" size={24} color={colors.notification} />
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16, color: colors.text, marginHorizontal: 15 }}>
                View Order History
              </Text>
            </View>
            <TouchableOpacity
              // onPress={() => {}}
              style={{ backgroundColor: colors.primary, borderRadius: 10, padding: 5 }}>
              <Icon name="arrow-right" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: colors.card,
              borderRadius: 10,
              width: "100%",
              marginTop: 15,
              padding: 15
            }}>
            <Icon name="home" size={24} color={colors.notification} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16, color: colors.text, marginHorizontal: 15 }}>
                Current Address
              </Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14, color: colors.text, marginHorizontal: 15 }}>
                Fl no. 1, ZYX Apartments, ABC Colony, Jaipur, Rajasthan
              </Text>
            </View>
            <TouchableOpacity
              // onPress={() => {}}
              style={{ backgroundColor: colors.primary, borderRadius: 10, padding: 5 }}>
              <Icon name="pencil" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
