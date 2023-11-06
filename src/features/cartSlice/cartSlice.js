import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../../components/data/data";

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.some((item) => item.id === action.payload)) return;
      state.cart = [
        ...state.cart,
        allProducts.find((product) => product.id === action.payload),
      ];
    },
    updateAmountAndPrice: (state) => {
      const { totalAmount, totalPrice } = state.cart.reduce(
        (accumulator, item) => {
          if (!item.amount) return;
          accumulator.totalAmount += item.amount;
          accumulator.totalPrice += item.price * item.amount;
          return accumulator;
        },
        { totalAmount: 0, totalPrice: 0 }
      );
      {
        (state.amount = totalAmount),
          (state.total = totalPrice + 30),
          (state.subTotal = totalPrice);
      }
    },
    updateQuantity: (state, { payload }) => {
      const newCart = state.cart
        .map((item) => {
          if (item.id == payload.id) {
            if (payload.type == "inc") {
              return { ...item, amount: item.amount + 1 };
            }
            if (payload.type == "dec") {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      state.cart = newCart;
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, updateAmountAndPrice, updateQuantity, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
