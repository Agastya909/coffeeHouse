import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FavItemCard from "./FavItemCard";
import LottieView from "lottie-react-native";
import { TextBox } from "../../component/TextBox";

const Fav: React.FC = () => {
  const favItems = useSelector((state: RootState) => state.favItemReducer.itemList);
  return (
    <View style={{ flex: 1 }}>
      <TextBox
        textBody="Your favorite items"
        fontSize={30}
        fontFamily="Poppins-SemiBold"
        marginTop={30}
        marginLeft={10}
      />
      {favItems.length === 0 ? (
        <>
          <LottieView
            autoPlay
            loop
            source={require("../../assets/animations/coffe-cup-animation.json")}
            style={{ height: 200, width: 200, alignSelf: "center", marginVertical: "auto", flex: 0.8 }}
          />
          <TextBox textBody="Wow, so empty" fontSize={20} textAlign="center" />
        </>
      ) : (
        <FlatList
          data={favItems}
          bounces={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <FavItemCard item={item} key={index} />}
        />
      )}
    </View>
  );
};

export default Fav;
