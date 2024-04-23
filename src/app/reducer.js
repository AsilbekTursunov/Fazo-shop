import { configureStore } from "@reduxjs/toolkit"
import cardReducer from "./cardSlice"
import { categoriesApi } from "../api/getApis"

export const store = configureStore({
  reducer: {
    card: cardReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(categoriesApi.middleware),
})
