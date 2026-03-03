import { createSlice } from '@reduxjs/toolkit';
import { plantCatalog } from './plantsData';

const initialState = {
  items: plantCatalog,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.items;
export default productsSlice.reducer;
