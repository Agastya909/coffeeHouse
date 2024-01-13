import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";

export type favItem = {
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

const initialState: { itemList: favItem[] } = {
  itemList: []
};

export const favItemReducer = createSlice({
  name: "favItem",
  initialState: initialState,
  reducers: {
    updateFavList: (state, actions: PayloadAction<favItem>) => {
      const { id } = actions.payload;
      const index = state.itemList.findIndex(elemment => elemment.id === id);
      if (index === -1) {
        state.itemList.push(actions.payload);
      } else {
        state.itemList.splice(index, 1);
      }
    }
  }
});

export const { updateFavList } = favItemReducer.actions;
export default favItemReducer.reducer;
