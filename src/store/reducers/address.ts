import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAddress: "Fl no. 1, ZYX Apartments, ABC Colony, Jaipur, Rajasthan"
};

export const addressReducer = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {
    saveAddress: (state, actions: PayloadAction<string>) => {
      state.currentAddress = actions.payload;
    }
  }
});

export const { saveAddress } = addressReducer.actions;
export default addressReducer.reducer;
