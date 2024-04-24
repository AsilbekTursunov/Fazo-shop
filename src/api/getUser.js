import { GetItem } from "../helper"
import axios from "./apiaxios"

const getUserInfo = {
  async getUser({ username, password }) {
    const user = {
      username: username,
      password: password,
      expiresInMins: 30,
    }
    const { data } = await axios.post("/auth/login", user)
    return data
  },
  async postUser({ firstName, lastName, age }) {
    console.log({ firstName, lastName, age })
    const response = await axios.post("/users/add", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
      }),
    })
    return response
  },
  async getAuthor() {
    const response = await axios.get("/user/me")
    return response
  },
  async addCart(product) {
    const response = axios.post("carts/add", product)
    return response
  },
  async getUserCarts(id) {
    const response = await axios.get(`carts/user/${id}`)
    return response
  },
  async deleteCartProduct(id) {
    const response = await axios.delete(`carts/${id}`)
    return response
  }
  
}
export default getUserInfo
