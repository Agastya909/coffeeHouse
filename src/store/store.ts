import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import favItemReducer from "./reducers/fav";
import statusBarReducer from "./reducers/statusBar";
import addressReducer from "./reducers/address";

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    favItemReducer: favItemReducer,
    statusBarReducer: statusBarReducer,
    addressReducer: addressReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
