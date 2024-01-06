import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import productReducer from '../features/productSlice';
import modalReducer from '../features/modalSlice';
import singleProductReducer from '../features/singleProductSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        modal: modalReducer,
        singleProduct: singleProductReducer,
    }
});