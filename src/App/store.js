import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import productReducer from '../features/productSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
});