import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartItem } from "../reducers/cart";

export type favItem = cartItem;

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
