import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsCount: 0
};

export const cartReducer = createSlice({
  name: "cart reducer",
  initialState: initialState,
  reducers: {
    increaseCount: state => {
      state.cartItemsCount++;
    },
    decreaseCount: state => {
      state.cartItemsCount--;
    }
  }
});

export const { increaseCount, decreaseCount } = cartReducer.actions;
export default cartReducer.reducer;
