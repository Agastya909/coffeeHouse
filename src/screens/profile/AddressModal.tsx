import React, { useState } from "react";
import { Modal, View, TextInput, Pressable, ToastAndroid } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { saveAddress } from "../../store/reducers/address";
import { TextBox } from "../../component/TextBox";

type Props = {
  isVisible: boolean;
  close: () => void;
};

type Address = {
  line1: string;
  line2: string;
  city: string;
  state: string;
};

const AddressModal: React.FC<Props> = ({ isVisible, close }) => {
  const { colors } = useTheme();
  const [address, setAddress] = useState<Address>({ city: "", line1: "", line2: "", state: "" });
  const dispatch = useDispatch();

  const handleInputChange = (key: keyof Address, value: string) => {
    setAddress(prevAddress => ({
      ...prevAddress,
      [key]: value
    }));
  };

  const inputArray: Array<keyof Address> = ["line1", "line2", "city", "state"];

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide" onRequestClose={close}>
      <View style={{ flex: 1 }}>
        <Pressable style={{ flex: 1 }} onPress={close} />
        <View
          style={{
            backgroundColor: colors.card,
            padding: 20,
            width: "100%",
            borderTopWidth: 2,
            borderTopColor: colors.notification
          }}>
          <TextBox textBody="Edit Address" textAlign="center" fontSize={24} />
          {inputArray.map((element, index) => (
            <TextInput
              key={index}
              value={address[element]}
              onChangeText={text => handleInputChange(element, text)}
              placeholder={`${element.charAt(0).toUpperCase()}${element.slice(1)}`}
              placeholderTextColor={colors.border}
              maxLength={30}
              style={{
                marginTop: 10,
                paddingHorizontal: 15,
                paddingTop: 10,
                paddingBottom: 5,
                backgroundColor: colors.background,
                borderRadius: 10,
                fontFamily: "Poppins-Regular",
                fontSize: 16
              }}
            />
          ))}
          <Pressable
            android_ripple={{
              color: "#611845"
            }}
            onPress={() => {
              if (
                address.line1.length === 0 ||
                address.line2.length === 0 ||
                address.city.length === 0 ||
                address.state.length === 0
              ) {
                ToastAndroid.showWithGravity("Fill all the address fields.", ToastAndroid.SHORT, ToastAndroid.CENTER);
                return;
              }
              const addressString = `${address.line1}, ${address.line2}, ${address.city}, ${address.state}`;
              dispatch(saveAddress(addressString));
              setAddress({ city: "", line1: "", line2: "", state: "" });
              close();
            }}
            style={{
              backgroundColor: colors.primary,
              borderRadius: 10,
              elevation: 2,
              justifyContent: "center",
              marginTop: 20,
              paddingHorizontal: 15,
              paddingTop: 10,
              paddingBottom: 5
            }}>
            <TextBox textBody="Save New Address" fontFamily="Poppins-SemiBold" textAlign="center" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddressModal;
