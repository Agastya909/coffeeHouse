import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { COFFEE_TYPES } from "../../assets/data/categories";

const Home = () => {
  const { colors } = useTheme();
  const [coffeeType, setCoffeeType] = useState<string>("All");
  return (
    <View style={{ marginHorizontal: 10 }}>
      {/* Header text */}
      <Text style={{ width: "60%", fontSize: 32, fontFamily: "Poppins-SemiBold", color: "#FFF", marginTop: 40 }}>
        Find the best coffee for you
      </Text>
      {/* search bar */}
      <TextInput
        style={{
          width: "100%",
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
      {/* horizontal scroll bar for types */}
      <FlatList
        horizontal={true}
        data={COFFEE_TYPES}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index, item }) => {
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
        }}
        style={{ marginTop: 20 }}
      />
      {/* horizontal list for coffee */}
      {/* horizontal list for coffee beans */}
      {/* horizontal list for coffee accesorries */}
    </View>
  );
};

export default Home;
