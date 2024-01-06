import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        clearCart: (state, action) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount = cartItem.amount+1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount = cartItem.amount-1;
        },
        calculateTotals: (state) => {
            let amount = 0, total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    }
})

export const {addCart, clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;