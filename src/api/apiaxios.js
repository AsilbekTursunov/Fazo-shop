import axios from "axios"
import { GetItem } from "../helper"

axios.defaults.baseURL = "https://dummyjson.com"
axios.interceptors.request.use(config => {
  const token = GetItem("token")
  const authorization = token ? `${token}` : null
  config.headers.Authorization = authorization
  return config
})
export default axios
