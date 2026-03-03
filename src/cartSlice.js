import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    incrementItem: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) return;
      state.items[id] -= 1;
      if (state.items[id] <= 0) {
        delete state.items[id];
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export const selectCartMap = (state) => state.cart.items;
export default cartSlice.reducer;
