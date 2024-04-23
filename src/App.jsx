import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Header, Navbar, Footer, Loader } from "./components"
import { Cart, HomePage, LikedProducts, Login, ProductDetail, SearchProducts } from "./pages"
import { GetItem } from "./helper"
import { useDispatch } from "react-redux"
import { loginUserFailure, loginUserSuccess } from "./app/cardSlice"
function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = GetItem("token")
    if (token) {
     const respose =  fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: token ? `${token}` : null,
        },
      })
        .then(data => data.json())
        .then(data => {
          dispatch(loginUserSuccess(data))
          return data
        })
      console.log(respose);
    } else {
      dispatch(loginUserFailure())
    }
  }, [])
  return (
    <div className=" font-full-main">
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/liked" element={<LikedProducts />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products/:slug" element={<SearchProducts />} />
          <Route exact path="/product-details/:slug" element={<ProductDetail />} />
          <Route exact path="/login-page" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
