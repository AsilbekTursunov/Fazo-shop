import React, { useState } from "react"
import { loginUserFailure, loginUserStart, loginUserSuccess } from "../../app/cardSlice"
import getUserInfo from "../../api/getUser"

import logo from "../../assets/images/Frame.png"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const checkUser = async e => {
    e.preventDefault()
    const user = { username: username, password: password }
    dispatch(loginUserStart())
    try {
      const response = await getUserInfo.getUser(user)
      dispatch(loginUserSuccess(response))
      navigate("/")
    } catch (error) {
      console.log(error)
      dispatch(loginUserFailure())
    }
  }
  return (
    <div className="w-full h-[90vh] border flex items-center justify-center">
      <div className="flex flex-col gap-4  w-5/6 sm:w-3/6 lg:w-2/6 2xl:w-1/5 text-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" width={140} height={48} />
        </div>
        <h1 className="text-2xl font-semibold text-slate-700">Login</h1>
        <p className="flex gap-3 flex-wrap">
          <span>
            Test username <span className="text-xl font-semibold text-violet-700">kminchelle</span>
          </span>
          <span>
            Test passowrd <span className="text-xl font-semibold text-violet-700">0lelplR</span>
          </span>
        </p>
        <form className=" flex flex-col gap-4">
          <input type="text" className="w-full p-2 border rounded-md outline-none" placeholder="Username" onChange={e => setUsername(e.target.value.trim())} />
          <input type="password" className="w-full p-2 border rounded-md outline-none" placeholder="Password" onChange={e => setPassword(e.target.value.trim())} />
          <button type="submit" onClick={e => checkUser(e)} className="p-2 text-white text-md bg-main rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
