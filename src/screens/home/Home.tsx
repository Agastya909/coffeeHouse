import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, TextInput, View } from "react-native";
import { COFFEE_TYPES } from "../../assets/data/categories";
import CoffeeData from "../../assets/data/coffee";
import BeansData from "../../assets/data/beans";
import ItemCard from "./ItemCard";
import { cartItem } from "../../store/reducers/cart";
import LottieView from "lottie-react-native";
import { TextBox } from "../../component/TextBox";

const Home: React.FC = () => {
  const { colors } = useTheme();
  const [coffeeType, setCoffeeType] = useState<string>("All");
  const [selectedDrinkData, setDrinkData] = useState<cartItem[]>(CoffeeData);
  const [search, setSearch] = useState<string>("");
  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      {/* Header text */}
      <LottieView
        autoPlay
        loop
        style={{ width: 75, height: 75, alignSelf: "center", marginTop: 30 }}
        source={require("../../assets/animations/home-animation.json")}
      />
      {/* search bar */}
      <TextInput
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={e => {
          const searchTerm = e.nativeEvent.text;
          const drinkData = CoffeeData.filter(element => element.name.toLowerCase().includes(searchTerm.toLowerCase()));
          setDrinkData(drinkData);
          setSearch("");
        }}
        style={{
          marginTop: 20,
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 5,
          backgroundColor: colors.card,
          borderRadius: 10,
          fontFamily: "Poppins-Regular",
          fontSize: 18
        }}
        placeholder="Search"
        placeholderTextColor={colors.border}
      />
      <ScrollView bounces={true} style={{ flex: 1, paddingBottom: 5, marginTop: 10 }}>
        <View
          style={{
            width: "100%",
            borderBottomColor: colors.notification,
            borderBottomWidth: 1,
            marginTop: 10
          }}
        />
        {/* horizontal bar for types */}
        <View style={{ marginTop: 10, display: "flex", flexDirection: "row" }}>
          {COFFEE_TYPES.map((item, index) => {
            const isSelected = coffeeType === item;
            return (
              <Pressable
                onPress={() => {
                  if (item === "All") {
                    setDrinkData(CoffeeData);
                  } else {
                    const drinkData = CoffeeData.filter(element => element.type === item);
                    setDrinkData(drinkData);
                  }
                  setCoffeeType(item);
                }}
                style={{
                  paddingHorizontal: 10,
                  margin: 5
                }}
                key={index}>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <TextBox textBody={item} fontSize={14} color={isSelected ? colors.notification : colors.text} />
                  <View
                    style={{
                      height: 7,
                      width: 7,
                      borderRadius: 7,
                      marginTop: 5,
                      backgroundColor: isSelected ? colors.notification : colors.background
                    }}
                  />
                </View>
              </Pressable>
            );
          })}
        </View>
        {/* horizontal list for coffee */}
        <FlatList
          data={selectedDrinkData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index, item }) => <ItemCard item={item} key={index} />}
          style={{ marginTop: 10 }}
        />
        <TextBox textBody="Coffee Beans" marginTop={15} fontSize={22} fontFamily="Poppins-SemiBold" />
        <View
          style={{
            width: "100%",
            borderBottomColor: colors.notification,
            borderBottomWidth: 1,
            marginVertical: 10
          }}
        />
        {/* horizontal list for coffee beans */}
        <FlatList
          data={BeansData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index, item }) => <ItemCard item={item} key={index} />}
          style={{ marginTop: 10 }}
        />
        {/* horizontal list for coffee accesorries */}
      </ScrollView>
    </View>
  );
};

export default Home;
