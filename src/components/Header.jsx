import React, { useEffect, useState } from "react"
import { useGetAllProductsQuery } from "../api/getApis"
import { IoLocateOutline, IoCallOutline } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { Link } from "react-router-dom"

import Logo from "../assets/images/Frame.png"
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 1280) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])
  return (
    <>
      {activeMenu ? (
        <>
          <div className="text-white text-[14px]   bg-main-color font-normal py-4">
            <div className="md:container mx-auto flex flex-col lg:flex-row  justify-between items-center">
              <div className="flex">
                <div id="location" className="flex items-center ">
                  <span className="text-2xl">
                    <CiLocationOn />
                  </span>
                  <a href="#">Toshkent</a>
                </div>
                <div id="services" className="flex gap-5 ml-10 items-center ">
                  <Link>Our stores</Link>
                  <Link>B2B sales</Link>
                  <Link>Purchase by installments</Link>
                  <Link>Payment Methods</Link>
                  <Link>Product Warranty</Link>
                </div>
              </div>
              <div id="call and languages" className="flex items-center gap-4">
                <div className="flex gap-3 items-center">
                  <span className="text-2xl">
                    <IoCallOutline />
                  </span>{" "}
                  <a href="#" className="text-lg">
                    +998 95 123 55 88
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-black text-[14px] bg-white font-normal py-4">
            <div className=" mx-3 md:container md:mx-auto flex   justify-between items-center">
              <div className="flex">
                <div id="log">
                  <Link to={"/"}>
                    <img src={Logo} alt="logo" width={85} height={24} />
                  </Link>
                </div>
              </div>
              <div id="call and languages" className="flex items-center gap-4">
                <div id="location" className="flex items-center gap-2 ">
                  <span className="text-2xl flex items-center gap-2 ">
                    <IoCallOutline />
                    <span className="text-sm hidden md:block"> +998 95 123 55 88</span>
                  </span>{" "}
                  <span className="text-2xl">
                    <CiLocationOn />
                  </span>
                  <a href="#">Ташкент</a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
