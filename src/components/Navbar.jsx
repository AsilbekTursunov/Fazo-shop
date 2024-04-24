import React, { useEffect, useState } from "react"
import { CiUser, CiHeart, CiSearch, CiMicrophoneOn } from "react-icons/ci"
import { PiScales } from "react-icons/pi"
import { SlBasket } from "react-icons/sl"
import { TfiMenuAlt } from "react-icons/tfi"
import Logo from "../assets/images/Frame.png"
import { Link, useNavigate } from "react-router-dom"
import { Loader, SideBar } from "../components"
import { useGetAllCategoriesQuery, useGetUserCartQuery } from "../api/getApis"
// Icon
import { IoIosArrowForward } from "react-icons/io"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { isLogin, user } = useSelector(state => state.card)
  const { data, isFetching1 } = useGetAllCategoriesQuery()
  const { data: carts, isFetching2 } = useGetUserCartQuery(user?.id)
  const [toggleCategory, setToggleCategory] = useState(false)
  const [toggleSlider, setToggleSlider] = useState(false)
  const [back, setBack] = useState(false)
  const [cartToggle, setCartToggle] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()
  if (isFetching1 && isFetching2) return <Loader />
  const searchByCategories = () => {
    if (searchValue.length > 0) {
      navigate(`/products/search?q=${searchValue}`)
    }
  }
  window.addEventListener("keyup", e => {
    if (e.key === "Enter") {
      searchByCategories()
    }
  }) 
  return (
    <div>
      <nav className="mx-3 md:container md:mx-auto my-2">
        <div className=" flex text-[14px] lg:justify-between   text-black mt-5">
          <div className="hidden xl:block" id="main-logo">
            <Link to={"/"} className=" cursor-pointer">
              <img src={Logo} alt="logo" width={120} height={36} />
            </Link>
          </div>
          <button className="lg:hidden bg-main-color text-white p-2 mr-1 text-xl rounded-[5px]" onClick={() => setToggleSlider(true)}>
            <TfiMenuAlt />
          </button>
          <div className="flex w-full rounded-[4px] border-main-clor border relative xl:w-[717px] items-center overflow-hidden   xl:mx-10" id="search-input">
            <div id="search-block" className=" outline-none flex-grow  mx-1 relative">
              <input type="text" placeholder="Search products" className=" w-full h-full outline-none pl-3" onChange={e => setSearchValue(e.target.value)} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-neutral-600">
                <CiMicrophoneOn />
              </span>
            </div>
            <button className=" bg-main-color  flex items-center  h-full p-2 gap-2 text-white" onClick={() => searchByCategories()}>
              <span className=" text-lg sm:text-2xl">
                <CiSearch />
              </span>
              <span className="hidden sm:block">Search</span>
            </button>
          </div>
          <div id="  personal pages" className=" gap-5 font-medium hidden  xl:flex">
            {isLogin ? (
              <>
                <span className="w-12 h-12 rounded-[50%] bg-contain bg-center bg-no-repeat border-2 border-slate-700" style={{ backgroundImage: `url(${user.image})` }}></span>
              </>
            ) : (
              <>
                <Link to={"/login-page"} className="flex flex-col justify-center items-center">
                  <CiUser className="text-2xl" />
                  <span>Sign In</span>
                </Link>
              </>
            )}
            <Link to={isLogin ? "cart" : "login-page"} className="flex flex-col justify-center items-center relative">
              <SlBasket className="text-2xl" />
              <span>Cart</span>
              <span className="w-5 h-5 rounded-[50%] bg-main-color text-white p-2 absolute top-0 -right-1 flex items-center justify-center">{carts?.carts[0]?.products?.length}</span>
            </Link>
          </div>
        </div>
        {/*  Search bar */}
        <div className="xl:flex mt-5 items-center hidden ">
          <button className=" rounded-[5px] bg-main-color text-white flex gap-2 items-center p-2 px-12 float-left" onClick={() => setToggleCategory(prevState => !prevState)}>
            <TfiMenuAlt />
            <span>Categories</span>
          </button>
          <ul className=" flex text-[16px] justify-between flex-grow font-medium items-center h-full  ml-10 overflow-y-scroll">
            {data?.slice(0, 9)?.map((item, index) => (
              <li key={index}>
                <a href="#" className=" text-black capitalize">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SideBar toggle={toggleSlider} setToggleSlider={setToggleSlider} />
        </div>
      </nav>
      <div className="relative">
        <div className={`z-40 absolute w-full ${toggleCategory ? "scale-100" : "scale-0"} h-[90vh] overflow-y-scroll  ${back ? "bg-slate-500" : "bg-white"} duration-[.1s]`}>
          <div className="md:container mx-auto h-full flex ">
            <div className="w-1/4">
              <ul className="flex flex-col gap-5 my-5">
                {data?.map((item, index) => (
                  <li key={index} className="" onClick={() => setBack(prevState => !prevState)}>
                    <Link to="/" className="flex items-center justify-between">
                      <span className="text-black font-normal text-sm capitalize pl-5">{item}</span>
                      <span className="text-md text-social-color p-2">
                        <IoIosArrowForward />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
{
  /**
<li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <IoIosLaptop />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Laptop</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <GiWifiRouter />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Сетевое оборудование</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <GiCctvCamera />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Видеонаблюдение</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <FaComputer />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Компьютеры</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <CgDrive />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Техника для офиса</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <FaHeadphonesAlt />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Аксессуары</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <FaKitchenSet />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Товары для дома</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <GiMouse />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">Периферийные устройства</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl text-neutral-400 px-3">
                      <MdOutlineWifiCalling3 />
                    </span>
                    <Link to="/">
                      <span className="text-black font-normal text-sm">IP Телефония</span>
                    </Link>
                  </div>
                  <span className="text-md text-social-color p-2">
                    <IoIosArrowForward />
                  </span>
                </li>

*/
}
