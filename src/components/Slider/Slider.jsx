import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "./style.css"
import { ScreenClientSize } from "../../helper"
// import required modules
import { Pagination } from "swiper/modules"
import { Link } from "react-router-dom"
const HeaderSlider = () => {
  const { activeMenu, screenSize } = ScreenClientSize()
  return (
    <>
      <div className="flex z-0">
        <Swiper modules={[Pagination]} className="mySwiper " loop={true} pagination={true} style={{zIndex:1}}>
          <SwiperSlide>
            <Link >
              <img  src={screenSize < 1024 ? "https://mini-io-api.texnomart.uz/newcontent/slider/101/e00isxu0VR3oNOlIqWW4y7EzChynjVi6Hz1tEewG.webp" : "https://mini-io-api.texnomart.uz/newcontent/slider/101/Ej9SvO0iucnQwEQQvcdk9Mjb62ZkZU2Nim9J4Jnv.webp"} alt="banner1" className=" bg-contain" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link >
              <img  src={screenSize < 1024 ? "https://mini-io-api.texnomart.uz/newcontent/slider/96/rN5fNqPU0ieJagVi2ZL5A7IhoNzPb6pZwYAXLZWX.webp" : "https://mini-io-api.texnomart.uz/newcontent/slider/96/Xd4e15EOnR1k8eL33ibqw88Q5YmlMkfjmQcnq788.webp"} alt="banner2" className=" bg-contain" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link >
              <img  src={screenSize < 1024 ? "https://mini-io-api.texnomart.uz/newcontent/slider/90/SRIvUox4S6VpSXiypPVffdnSEAL8rqmDrRJ3E3xn.webp" : "https://mini-io-api.texnomart.uz/newcontent/slider/90/IyWFBDxp6b5DQ5efASBni1lhcWbhzN8VFvEtN0Tm.webp"} alt="banner3" className=" bg-contain" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link >
              <img  src={screenSize < 1024 ? "https://mini-io-api.texnomart.uz/newcontent/slider/58/P7kZwc0bSZSGUhBSc6q0beTcgKufoTpZecr2Qg51.webp" : "https://mini-io-api.texnomart.uz/newcontent/slider/58/u5T8LQ7I0Vh8nbqPqIjVRg1oOBZhfj9pMyFAX7sX.webp"} alt="banner4" className=" bg-contain" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default HeaderSlider
