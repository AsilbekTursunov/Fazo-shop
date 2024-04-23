import React, { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./productslider.css"
const ProductSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(" ")
  console.log(images)
  return (
    <div className="flex flex-col z-0 w-full ">
      <Swiper spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} pagination={true} loop={true} modules={[FreeMode, Navigation, Pagination, Thumbs]} className="mySwiper2">
        {images?.map(image => (
          <SwiperSlide className="w-full h-full bg-contain  bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}></SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSlider
