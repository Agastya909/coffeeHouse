import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTranslucent: false,
  background: "#121212"
};

export const statusBarReducer = createSlice({
  name: "statusBar",
  initialState: initialState,
  reducers: {
    setTranslucent: state => {
      state.isTranslucent = true;
      state.background = "transparent";
    },
    unSetTranslucent: state => {
      state.isTranslucent = false;
      state.background = "#121212";
    }
  }
});

export const { setTranslucent, unSetTranslucent } = statusBarReducer.actions;
export default statusBarReducer.reducer;
