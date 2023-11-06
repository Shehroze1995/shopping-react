import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/Sidebar";
import searchbarReducer from "./features/searchbar/Searchbar";
import globalReducer from "./features/globalState/globalState";
import productsReducer from "./features/productsSlice/productsSlice";
import cartReducer from "./features/cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    searchbar: searchbarReducer,
    globalState: globalReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
