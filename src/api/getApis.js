import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetItem } from "../helper"
const token = GetItem("token")
const author = {
  Authorization: token ? `${token}` : null,
}
const baseUrl = "https://dummyjson.com"

const createRequest = url => ({ url, headers: author })

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: builder => ({
    getAllCategories: builder.query({
      query: () => createRequest(`/products/categories`),
    }),
    getAllProducts: builder.query({
      query: count => createRequest(`/products?limit=${count ? count : 100}`),
    }),
    getSingleProduct: builder.query({
      query: slug => createRequest(`/products/${slug}`),
    }),
    getCartsProdcuts: builder.query({
      query: () => createRequest(`/carts`),
    }),
    getUserCart: builder.query({
      query: id => createRequest(`carts/user/${id}`),
    }),
  }),
})

export const { useGetAllCategoriesQuery, useGetAllProductsQuery, useGetSingleProductQuery, useGetCartsProdcutsQuery, useGetUserCartQuery } = categoriesApi
