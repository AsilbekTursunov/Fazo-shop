import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "./brends.css"
import { ScreenClientSize } from "../../helper"

const BrendSlider = () => {
  const { activeMenu, screenSize } = ScreenClientSize() 

  return (
    <>
      <Swiper watchSlidesProgress={true} slidesPerView={screenSize >= 1280 ? 4 : screenSize >= 1024 && screenSize <= 1280 ? 3 : screenSize >= 768 && screenSize <= 1024 ? 2 : screenSize <= 640 ? 1 : 0} loop={true} className="mySwiper">
        <SwiperSlide className="p-5 h-44">
          <div className="p-5 w-full h-full rounded-md border">
            <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(https://www.canonnews.com/Portals/0/EasyDNNnews/2383/Canon-Logo.png)` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 h-44">
          <div className="p-5 w-full h-full rounded-md border">
            <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(https://static.insales-cdn.com/images/collections/1/2573/91580941/Xiaomi-Simbolo.png)` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 h-44">
          <div className="p-5 w-full h-full rounded-md border">
            <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(https://kondicioneri24.ru/wp-content/uploads/2018/07/lg_logo_PNG15.png)` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 h-44">
          <div className="p-5 w-full h-full rounded-md border">
            <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614585280_26-p-samsung-na-belom-fone-38.png)` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 h-44">
          <div className="p-5 w-full h-full rounded-md border">
            <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(https://bank.uz/rassrochka_backup/televizory/artellogo.png)` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 h-44">
          <div className="p-5 w-full h-full rounded-md border">
            <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/01/apple-logos_5e123a9daff06.png)` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-5 h-44">
          <div className="p-5 w-full h-full rounded-md border">
            <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(https://www.icao.int/Meetings/ADS-B/PublishingImages/Pages/default/NOKIA_LOGO_RGB_HR.png)` }}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default BrendSlider
