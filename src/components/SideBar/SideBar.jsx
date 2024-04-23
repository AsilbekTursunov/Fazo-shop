import React from "react"
import { RxCross2 } from "react-icons/rx"
import { brandLogo } from "../../assets"
import { LuUser, LuWallet } from "react-icons/lu"
import { GrBook } from "react-icons/gr"
import { Link } from "react-router-dom"
import { AiOutlineControl, AiOutlineSafety } from "react-icons/ai"
import { GiMoneyStack } from "react-icons/gi"
import { IoCallOutline } from "react-icons/io5"
const SideBar = ({ toggle, setToggleSlider }) => {
  return (
    <div className={`w-3/4 h-screen bg-white absolute ${toggle ? "left-0" : "-left-3/4"} top-0 z-[100] duration-[.5s] p-3`}>
      <div className="flex justify-between items-center">
        <div>
          <img src={brandLogo} alt="brand-log" width={120} height={32} />
        </div>
        <div className="text-lg" onClick={() => setToggleSlider(false)}>
          <RxCross2 />
        </div>
      </div>
      {/* user registiration block */}
      <div className=" flex justify-evenly items-center mt-5">
        <div className=" w-8 h-8 rounded-[50%] bg-[#F2F2F2] text-xl flex items-center justify-center">
          <LuUser />
        </div>
        <Link to={'/login-page'} className="text-black text-xs p-1">Войти</Link>
        <span className="w-[1px] h-4 bg-neutral-400"></span>
        <button className="text-black text-xs p-1">Регистрация</button>
      </div>
      <ul className="flex flex-col gap-5 mt-10">
        <li className="flex justify-start gap-2">
          <span className="text-xl text-neutral-400">
            <GrBook />
          </span>
          <Link to="/">
            <span className="text-black font-medium text-sm">Наши магазины</span>
          </Link>
        </li>
        <li className="flex justify-start gap-2">
          <span className="text-xl text-neutral-400">
            <AiOutlineControl />
          </span>
          <Link to="/">
            <span className="text-black font-medium text-sm">B2B продажи</span>
          </Link>
        </li>
        <li className="flex justify-start gap-2">
          <span className="text-xl text-neutral-400">
            <GiMoneyStack />
          </span>
          <Link to="/">
            <span className="text-black font-medium text-sm">Покупка в рассрочку</span>
          </Link>
        </li>
        <li className="flex justify-start gap-2">
          <span className="text-xl text-neutral-400">
            <LuWallet />
          </span>
          <Link to="/">
            <span className="text-black font-medium text-sm">Способы оплаты</span>
          </Link>
        </li>
        <li className="flex justify-start gap-2">
          <span className="text-xl text-neutral-400">
            <AiOutlineSafety />
          </span>
          <Link to="/">
            <span className="text-black font-medium text-sm">Гарантия на товары</span>
          </Link>
        </li>
      </ul>
      <div className="flex justify-start items-center mt-5">
        <button className="py-1 px-4 mx-2 border border-main rounded-md bg-main-color text-white text-sm">Рус</button>
        <button className="py-1 px-4 mx-2 border border-main rounded-md text-main bg-white text-sm">Узб</button>
      </div>
      <div className="flex justify-start items-center mt-5">
        <span className="text-2xl">
          <IoCallOutline />
        </span>{" "}
        <a href="#" className="text-md px-2">
          +998 95 123 55 88
        </a>
      </div>
    </div>
  )
}

export default SideBar
