import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../../components/data/data";
const categories = [...new Set(allProducts.map((item) => item.category))];

const initialState = {
  products: allProducts,
  categories,
  singleProduct: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showByCategory: (state, action) => {
      state.products = allProducts.filter(
        (product) => product.category == action.payload
      );
    },
    showAllProducts: (state) => {
      state.products = allProducts;
    },
    showSingleProduct: (state, action) => {
      state.singleProduct = allProducts.find(
        (product) => product.id == action.payload
      );
    },
  },
});

export const { showByCategory, showAllProducts, showSingleProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
