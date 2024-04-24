import React, { useState } from "react"
import { formatPrice } from "../helper"
import { Link } from "react-router-dom"
import getUserInfo from "../api/getUser"

import { SlBasketLoaded } from "react-icons/sl"
import { CiHeart } from "react-icons/ci"
import { HiOutlineScale } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux"
import { useGetUserCartQuery } from "../api/getApis"
import Loader from "./Loader"
const Product = ({ product, info }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.card)
  const { data, isFetching } = useGetUserCartQuery(user?.id)
  const [disCountTime, setdisCountTime] = useState()

  if (isFetching) return <Loader />
  const deadline = "2026-06-11"
  const getDisCount = (price, disCount) => {
    const disCountPrice = price - (disCount * price) / 100
    return disCountPrice
  }
  const getTimeRemaining = endtime => {
    let days, hours, minutes, seconds
    const timer = Date.parse(endtime) - Date.parse(new Date())

    if (timer <= 0) {
      ;(days = 0), (hours = 0), (minutes = 0), (seconds = 0)
    } else {
      ;(days = Math.floor(timer / (1000 * 60 * 60 * 24)) < 10 ? "0" + Math.floor(timer / (1000 * 60 * 60 * 24)) : Math.floor(timer / (1000 * 60 * 60 * 24))), (hours = Math.floor((timer / (1000 * 60 * 60)) % 24) < 10 ? "0" + Math.floor((timer / (1000 * 60 * 60)) % 24) : Math.floor((timer / (1000 * 60 * 60)) % 24)), (minutes = Math.floor((timer / 1000 / 60) % 60) < 10 ? "0" + Math.floor((timer / 1000 / 60) % 60) : Math.floor((timer / 1000 / 60) % 60)), (seconds = Math.floor((timer / 1000) % 60) < 10 ? "0" + Math.floor((timer / 1000) % 60) : Math.floor((timer / 1000) % 60))
      return { days, hours, minutes, seconds }
    }
  }

  setInterval(() => {
    setdisCountTime(getTimeRemaining(deadline))
  }, 1000)
  const addToCart = async id => { 
    const products = {
      userId: user.id,
      products: [...data?.carts[0]?.products, { id: id, quantity: 1 }],
    }
    try {
      const response = await getUserInfo.addCart(products)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="p-2 w-[285px] flex-grow">
      <div className=" relative  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-2">
        <Link to={`/product-details/${product.id}`} className="p-2">
          <div className="w-full h-36 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
        </Link>
        <div className="p-2  text-center">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 flex   items-center justify-between">
            {" "}
            <span className=" text-grey-300 line-through text-xs ">{formatPrice(product.price * 12500)} сум</span>
            <span className=" w-[1px]  bg-gray-400 h-4 "></span>
            <span className=" text-main font-semibold text-sm">{formatPrice(getDisCount(product.price * 12500, product.discountPercentage.toFixed(0)))} сум</span>
          </h2>
          <h1 className="title-font text-md font-semibold text-gray-900 mb-3 h-5">{product.title}</h1>
          {info ? (
            <>
              <p className="leading-relaxed mb-3 text-sm h-10 overflow-y-hidden">{product.description}</p>
              <div className="flex items-center justify-between ">
                <div className="text-gray-400 flex flex-col items-center gap-2 leading-none text-sm border-r border-gray-200 pr-4">
                  <span className="text-black font-medium">{disCountTime && disCountTime.days}</span>
                  <span className="text-[8px]">ДНЕЙ</span>
                </div>
                <div className="text-gray-400 flex flex-col items-center gap-2 leading-none text-sm border-r border-gray-200 pr-4">
                  <span className="text-black font-medium">{disCountTime && disCountTime.hours}</span>
                  <span className="text-[8px]">ЧАСОВ</span>
                </div>
                <div className="text-gray-400 flex flex-col items-center gap-2 leading-none text-sm border-r border-gray-200 pr-4">
                  <span className="text-black font-medium">{disCountTime && disCountTime.minutes}</span>
                  <span className="text-[8px]">МИНУТ</span>
                </div>
                <div className="text-gray-400 flex flex-col items-center gap-2 leading-none text-sm">
                  <span className="text-black font-medium">{disCountTime && disCountTime.seconds}</span>
                  <span className="text-[8px]">СЕКУНД</span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div id="card-btn" className="flex justify-evenly   border-t border-gray-200 pt-4">
          <div>
            <button type="button" className="text-xl hover:text-main font-black " onClick={() => addToCart(product.id)}>
              <SlBasketLoaded />
            </button>
          </div>
          <div className=" border-x-[1px] border-neutral-300 px-5">
            <button type="button" className="text-xl hover:text-main  ">
              <CiHeart />
            </button>
          </div>
          <div>
            <button type="button" className="text-xl hover:text-main  ">
              <HiOutlineScale />
            </button>
          </div>
        </div>
        <div className=" absolute text-white text-xs bg-main-color w-10 h-10 flex items-center justify-center rounded-[50%] top-4 right-4"> -{product.discountPercentage.toFixed(0)}%</div>
      </div>
    </div>
  )
}

export default Product
