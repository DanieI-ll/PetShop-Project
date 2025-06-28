import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price, discont_price, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.map((item) => {
          if (item.id === id) {
            item.quantity += quantity || 1;
          }
          return item;
        });
      } else {
        state.items.push({
          id,
          quantity: quantity || 1,
          title,
          image,
          price,
          discont_price,
        });
      }
    },
    changeQuantity: (state, { payload }) => {
      const { method, value, id } = payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          if (method === 'decrement') {
            item.quantity = Math.max(item.quantity - value, 1);
          } else {
            item.quantity += value;
          }
        }
        return item;
      });
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          item.quantity = Number(quantity);
        }
        return item;
      });
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  updateQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;