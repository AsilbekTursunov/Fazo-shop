import React, { useEffect } from "react"
import { BiHeart, BiTrash } from "react-icons/bi"
import { IoCloseCircleOutline } from "react-icons/io5"
import { FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import { SlBasketLoaded } from "react-icons/sl"
import { HiOutlineScale } from "react-icons/hi2"
import { formatPrice } from "../../helper"

const LikedProducts = () => {
  const likedData = JSON.parse(localStorage.getItem("liked_products"))
  useEffect(() => {}, [likedData])
  const getDisCount = (price, disCount) => {
    const disCountPrice = price - (disCount * price) / 100
    return disCountPrice
  }
  return (
    <div className="mx-3 md:container md:mx-auto">
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h4 className="text-black font-semibold text-lg ">Ваши любимые продукты</h4>
        </div>
        <ul className="w-full h-full mt-2 flex flex-wrap   justify-start overflow-y-scroll p-2">
          {likedData &&
            likedData.map(product => (
              <li className="flex flex-col items-center border rounded-md mb-3 px-2 w-[275px]">
                <div className="p-3 ">
                  <div className=" w-32 h-32 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${product.image})` }}></div>
                </div>
                <div className="py-2 text-center">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 flex   items-center justify-between">
                    {" "}
                    <span className=" text-grey-300 line-through text-xs ">{formatPrice(product.price)} сум</span>
                    <span className=" w-[1px]  bg-gray-400 h-4 mx-2 "></span>
                    <span className=" text-main font-semibold text-sm">{formatPrice(getDisCount(product.price, product.disCount))} сум</span>
                  </h2>
                  <h1 className="title-font text-md font-semibold text-gray-900 mb-3 h-12">{product.title}</h1>
                  <p className="leading-relaxed mb-3 text-sm">{product.description}</p>
                </div>
                <div id="card-btn" className="flex justify-evenly  w-full border-t border-gray-200 py-4">
                  <button type="button" className="text-xl hover:text-main font-black " onClick={() => addCardStorage(product.id)}>
                    <SlBasketLoaded />
                  </button>
                  <div className=" border-x-[1px] border-neutral-300 px-5">
                    {product.like ? (
                      <>
                        <button className="text-md font-semibold text-main ">
                          <FaHeart />
                        </button>
                      </>
                    ) : (
                      <>
                        <button type="button" className="text-xl hover:text-main  " onClick={() => addLikedStorage(product.id)}>
                          <CiHeart />
                        </button>
                      </>
                    )}
                  </div>
                  <button type="button" className="text-xl hover:text-main  ">
                    <HiOutlineScale />
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default LikedProducts
