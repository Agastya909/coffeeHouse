import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParams } from "../../Navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AddressModal from "./AddressModal";
import { TextBox } from "../../component/TextBox";

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const address = useSelector((state: RootState) => state.addressReducer.currentAddress);
  const [addressEditable, setAddressEditable] = useState<boolean>(false);

  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      <Image
        source={require("../../assets/images/profile.png")}
        alt={"Agastya"}
        style={{ height: 200, width: 200, borderRadius: 100, alignSelf: "center", marginTop: 50 }}
      />
      <TextBox textBody="Agastya" fontSize={32} marginTop={20} alignSelf="center" fontFamily="Poppins-SemiBold" />
      <TextBox textBody="+91-1234567890" textAlign="center" color={colors.border} />
      <TextBox textBody="FirstnameLastname@gmail.com" textAlign="center" color={colors.border} />
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
              <TextBox textBody="View Order History" marginLeft={15} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("orderhistory")}
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
              <TextBox textBody="Current Address" marginLeft={15} />
              <TextBox textBody={address} marginLeft={15} fontSize={14} />
            </View>
            <TouchableOpacity
              onPress={() => setAddressEditable(true)}
              style={{ backgroundColor: colors.primary, borderRadius: 10, padding: 5 }}>
              <Icon name="pencil" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <AddressModal isVisible={addressEditable} close={() => setAddressEditable(false)} />
    </View>
  );
};

export default Profile;
