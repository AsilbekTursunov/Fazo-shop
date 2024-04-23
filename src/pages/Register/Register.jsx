import React, { useState } from "react"
import logo from "../../assets/images/Frame.png"
import getUserInfo from "../../api/getUser"
import { loginUserFailure, loginUserStart, loginUserSuccess } from "../../app/cardSlice"
import { useDispatch } from "react-redux"
const Register = () => {
  const dispatch = useDispatch()
  const [firstname, setUsername] = useState("")
  const [lastname, setEmail] = useState("")
  const [age, setPassword] = useState("")
  const checkUser = async () => {
    const user = { firstname: firstname, lastname: lastname, age: age }
    dispatch(loginUserStart())
    try {
      const response = await getUserInfo.postUser(user)
      console.log(response)
      dispatch(loginUserSuccess())
    } catch (error) {
      console.log(error)
      dispatch(loginUserFailure())
    }
  }
  return (
    <div className="w-full h-[90vh] border flex items-center justify-center ">
      <div className="flex flex-col gap-4  w-5/6 sm:w-3/6 lg:w-2/6 2xl:w-1/5 text-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" width={80} height={32} />
        </div>
        <h1 className="text-3xl font-semibold text-slate-700">Register</h1>
        <form className=" flex flex-col gap-4">
          <input type="text" className="w-full p-2 border rounded-md outline-none" placeholder="Username" onChange={e => setUsername(e.target.value.trim())} />
          <input type="email" className="w-full p-2 border rounded-md outline-none" placeholder="Email" onChange={e => setEmail(e.target.value.trim())} />
          <input type="password" className="w-full p-2 border rounded-md outline-none" placeholder="Password" onChange={e => setPassword(e.target.value.trim())} />
          <button type="submit" onSubmit={() => checkUser()} className="p-2 text-white text-md bg-main rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
