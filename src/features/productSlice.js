import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    data : [],
    status: STATUSES.IDLE,
    isLoading: true
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProduct: (state, action) => {
            state.data = action.payload;
        },
        remove: (state, action)=> {
            return state.filter((item) => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {state.status = STATUSES.LOADING})
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {state.status = STATUSES.ERROR});
    }
});

export const { setProduct, remove } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    return data;
});