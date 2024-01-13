import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useTheme } from "@react-navigation/native";
import FavItemCard from "./FavItemCard";
import LottieView from "lottie-react-native";

const Fav: React.FC = () => {
  const dispatch = useDispatch();
  const favItems = useSelector((state: RootState) => state.favItemReducer.itemList);
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Poppins-SemiBold",
          color: colors.text,
          marginTop: 30,
          marginBottom: 10,
          marginHorizontal: 10
        }}>
        Your favourite items
      </Text>
      {favItems.length === 0 ? (
        <>
          <LottieView
            autoPlay
            loop
            source={require("../../assets/animations/spilled-animation.json")}
            style={{ height: 200, width: 200, alignSelf: "center", marginVertical: "auto", flex: 0.8 }}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins-Regular",
              color: colors.text,
              textAlign: "center"
            }}>
            Wow, so empty
          </Text>
        </>
      ) : (
        <FlatList
          data={favItems}
          bounces={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <FavItemCard item={item} key={index} />}
          keyExtractor={(item, index) => item.id.toString()} // Make sure to replace 'id' with the actual unique key property in your 'favItems'
        />
      )}
    </View>
  );
};

export default Fav;
