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
    const response = await axios.get("/auth/me")
    return response
  },
}
export default getUserInfo
