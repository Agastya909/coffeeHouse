import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import favItemReducer from "./reducers/fav";
import statusBarReducer from "./reducers/statusBar";

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    favItemReducer: favItemReducer,
    statusBarReducer: statusBarReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
