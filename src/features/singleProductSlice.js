import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    data: [],
    status: STATUSES.IDLE,
    isLoading: true
};

const SingleProductSlice = createSlice({
    name: 'single product',
    initialState: initialState,
    reducers: {
        setProduct: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state, action) => {state.status = STATUSES.LOADING})
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {state.status = STATUSES.ERROR});
    }
});

export const { setProduct } = SingleProductSlice.actions;
export default SingleProductSlice.reducer;

export const fetchSingleProduct = createAsyncThunk('product/fetch', async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await resp.json();
    return data;
});
