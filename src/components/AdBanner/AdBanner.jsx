import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom"
import "swiper/css"
import "swiper/css/pagination"
import "./banner.css"

//  helpers
import { formatPrice } from "../../helper"
// fake data write by me
import { adBannerInfo } from "../../../products"
const AdBanner = () => {
  const getDisCount = (price, disCount) => {
    const disCountPrice = price - (disCount * price) / 100
    return disCountPrice
  }
  return (
    <>
      <Swiper slidesPerView={1} spaceBetween={30} loop={true} className="mySwiper">
        {adBannerInfo.map(product => (
          <SwiperSlide className=" bg-[#F7F7F7] py-5 w-full" key={product.id}>
            <div className="mx-3 md:container md:mx-auto flex flex-col lg:flex-row items-center justify-between ">
              <div className="flex flex-col w-3/4 lg:w-1/3 text-start">
                <h2 className="text-lg lg:text-[42px]">{product.title}</h2>
                <p className="text-xs lg:text-md text-zinc-400 ">{product.description}</p>
              </div>
              <div className="  w-3/4 lg:w-1/3 h-96 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="w-2/3 lg:w-1/3 flex flex-col text-center lg:text-start gap-4">
                <h2 className="text-main font-semibold text-[20px] lg:text-[42px]">{formatPrice(getDisCount(product.price, product.disCount))} Cум</h2>
                <p className="text-link-color text-[14px] lg:text-[20px] line-through">{formatPrice(product.price)} Cум</p>
                <Link>
                  <button className="border-main border rounded-lg px-[36px] lg:px-[51px] py-[12px] text-md hover:text-white hover:bg-main-color transition-colors">See More</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default AdBanner
