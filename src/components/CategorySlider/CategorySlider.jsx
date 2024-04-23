import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "./categoryStyle.css"
import { cameraCate, computeCate, laptopCate, phoneCate } from "../../assets"
import { ScreenClientSize } from "../../helper"
import { Link } from "react-router-dom"
const CategorySlider = () => {
  const { activeMenu, screenSize } = ScreenClientSize()
  return (
    <Swiper watchSlidesProgress={true} slidesPerView={screenSize >= 1280 ? 4 : screenSize >= 1024 && screenSize <= 1280 ? 3 : screenSize >= 768 && screenSize <= 1024 ? 2 : screenSize <= 640 ? 1 : 0} className="mySwiper" loop={true}>
      <SwiperSlide className="">
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2    flex w-full h-24 items-center ">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Computers</h3>
            <div className="relative  w-2/5">
              <img src={computeCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2   flex w-full h-24 items-center">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Telephones And Tablets</h3>
            <div className="relative  w-2/5">
              <img src={phoneCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2  flex w-full h-24 items-center">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Laptop</h3>
            <div className="relative  w-2/5">
              <img src={laptopCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2    flex w-full h-24 items-center">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Office products</h3>
            <div className="relative  w-2/5">
              <img src={cameraCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="">
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2    flex w-full h-24 items-center ">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Computers</h3>
            <div className="relative  w-2/5">
              <img src={computeCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2   flex w-full h-24 items-center">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Telephones And Tablets</h3>
            <div className="relative  w-2/5">
              <img src={phoneCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2  flex w-full h-24 items-center">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Laptop</h3>
            <div className="relative  w-2/5">
              <img src={laptopCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="border rounded-lg  border-neutral-200 mx-2">
          <div className="m-2    flex w-full h-24 items-center">
            <h3 className="font-semibold text-[16px] text-black w-3/5">Office products</h3>
            <div className="relative  w-2/5">
              <img src={cameraCate} alt="computer-categories-block-image" className="  z-10 w-6" />
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}

export default CategorySlider
