import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// define single API slice object
export const apiSlice = createApi({
    reducerPath: 'api',
    // all requests will have URLs starting with 'fakestoreapi.com
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: builder => ({
        getLogin: builder.query({
            query: () => '/auth/login'
        }),
        getProducts: builder.query({
            query: () => '/products'
        }),
        getUsers: builder.query({
            query: () => '/users'
        }),
        getCarts: builder.query({
            query: () => '/carts'
        })
    })
});

// Export the auto-generated hook for the `getEntities` query endpoints
export const { useGetProductsQuery, useGetLoginQuery, useGetCartsQuery, useGetUsersQuery } = apiSlice;