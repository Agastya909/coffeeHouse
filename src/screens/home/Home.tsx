import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { COFFEE_TYPES } from "../../assets/data/categories";
import CoffeeData from "../../assets/data/coffee";
import BeansData from "../../assets/data/beans";
import ItemCard from "./ItemCard";

const Home: React.FC = () => {
  const { colors } = useTheme();
  const [coffeeType, setCoffeeType] = useState<string>("All");
  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      {/* Header text */}
      <Text style={{ width: "80%", fontSize: 32, fontFamily: "Poppins-SemiBold", color: "#FFF", marginTop: 40 }}>
        Find the best Drink for you
      </Text>
      {/* search bar */}
      <TextInput
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
                onPress={() => setCoffeeType(item)}
                style={{
                  paddingHorizontal: 10,
                  margin: 5
                }}
                key={index}>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Text style={{ color: isSelected ? colors.notification : colors.text }}>{item}</Text>
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
          data={CoffeeData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index, item }) => <ItemCard item={item} key={index} />}
          style={{ marginTop: 10 }}
        />
        <Text style={{ fontSize: 22, fontFamily: "Poppins-SemiBold", color: "#FFF", marginTop: 15 }}>Coffee Beans</Text>
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
