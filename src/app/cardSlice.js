import { createSlice } from "@reduxjs/toolkit"
import { GetItem, SetItem } from "../helper"
const initialState = {
  cardStorage: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [],
  likedProducts: JSON.parse(localStorage.getItem("liked_products")) ? JSON.parse(localStorage.getItem("liked_products")) : [],
  isLogin: false,
  isFetching: false,
  user: null,
}
export const cardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      state.cardStorage = action.payload
      localStorage.setItem("cart", JSON.stringify(state.cardStorage))
    },
    addLikes: (state, action) => {
      state.likedProducts = action.payload
      localStorage.setItem("liked_products", JSON.stringify(state.likedProducts))
    },
    loginUserStart: (state, action) => {
      state.isFetching = true
    },
    loginUserSuccess: (state, action) => {
      state.isFetching = false
      state.isLogin = true
      state.user = action.payload
      const token = GetItem("token")
      SetItem("token", state.user.token ? state.user.token : token)
    },
    loginUserFailure: (state, action) => {
      state.isFetching = false
      state.isLogin = false
    },
  },
})

export const { addCard, addLikes, loginUserFailure, loginUserStart, loginUserSuccess } = cardSlice.actions

export default cardSlice.reducer
