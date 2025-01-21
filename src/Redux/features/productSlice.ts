import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from '../../data/product';
import {Product} from '@/types/product'
import { apiSlice } from "../apiSlice";
// Define the initial state as an array of products
const initialState: Product[] = products;


// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Define a type-safe reducer for adding a product
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});

// Selector to access the product slice state
export const productSliceSelector = (store: { product: Product[] }) => store.product;

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;




// const productSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query<Product[], void>({
//       query: () => '/products',
//       transformResponse: (response: Product[]) => response,
//       providesTags: ['Product'],
//     }),
    
//     addProduct: builder.mutation<Product, Product>({
//       query: (product) => ({
//         url: '/products',
//         method: 'POST',
//         body: product,
//       }),
//       invalidatesTags: ['Product'],
//     }),
//   }),
// })


// export const { useGetProductsQuery, useAddProductMutation } = productSlice