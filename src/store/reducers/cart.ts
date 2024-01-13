import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";

type cartItem = {
  id: string;
  name: string;
  description: string;
  roasted?: string;
  imagelink_square: ImageSourcePropType;
  imagelink_portrait: ImageSourcePropType;
  ingredients: string;
  special_ingredient: string;
  price: number;
  average_rating: number;
  ratings_count: number;
  favourite: boolean;
  type: string;
  index: number;
};

type cartItemWithQuantity = {
  item: cartItem;
  quantity: number;
};

const initialState: { itemList: cartItemWithQuantity[] } = {
  itemList: []
};

export const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const { id } = action.payload;
      const existingItemIndex = state.itemList.findIndex(item => item.item.id === id);
      if (existingItemIndex !== -1) {
        state.itemList[existingItemIndex].quantity++;
      } else {
        state.itemList.push({ item: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      const existingItemIndex = state.itemList.findIndex(item => item.item.id === idToRemove);
      if (existingItemIndex !== -1) {
        if (state.itemList[existingItemIndex].quantity > 1) {
          state.itemList[existingItemIndex].quantity--;
        } else {
          state.itemList = [];
        }
      }
    },
    emptyCart: state => {
      state.itemList = [];
    }
  }
});

export const { addToCart, emptyCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
