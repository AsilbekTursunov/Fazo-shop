import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Header, Navbar, Footer, Loader } from "./components"
import { Cart, HomePage, LikedProducts, Login, ProductDetail, SearchProducts } from "./pages" 
import { useDispatch } from "react-redux"
import { loginUserFailure, loginUserSuccess, loginUserStart } from "./app/cardSlice"
import getUserInfo from "./api/getUser" 
function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = () => {
      dispatch(loginUserStart())
      try {
        getUserInfo.getAuthor().then(data => {
          dispatch(loginUserSuccess(data.data))
        })
      } catch (error) {
        dispatch(loginUserFailure())
      }
    }
    getUser()
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
