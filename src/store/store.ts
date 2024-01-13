import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import favItemReducer from "./reducers/fav";

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    favItemReducer: favItemReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
