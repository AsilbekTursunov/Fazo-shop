import React, { useState } from "react"
import { useGetUserCartQuery } from "../../api/getApis"
import { BiHeart, BiTrash } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Loader } from "../../components"
import { formatPrice } from "../../helper"

const Cart = () => {
  const { user } = useSelector(state => state.card)
  const { cardStorage } = useSelector(state => state.card)
  const [selectAll, setSelectAll] = useState(false)
  const { data, isFetching } = useGetUserCartQuery(user?.id)
  if (isFetching) return <Loader />
  const deleteProduct = id => {
    const deletedData = useDeleleCartMutation(id)
    console.log(deletedData)
  }
  console.log(data)
  return (
    <div className="mx-3 md:container md:mx-auto">
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="flex flex-col w-full">
          <div className="flex justify-between px-4">
            <h4 className="text-black font-semibold text-lg ">Ваши любимые продукты</h4>
            <div className="flex gap-4 items-center">
              <h4 className=" text-social-color text-md">Выбрать все</h4>
              <input type="checkbox" className="w-4 h-4 border " onChange={() => setSelectAll(prevState => !prevState)} />
            </div>
          </div>
          <ul className="w-full h-full mt-2  overflow-y-scroll p-2">
            {cardStorage &&
              data?.carts?.map(products =>
                products?.products?.map(product => (
                  <li className="flex items-center   rounded-md mb-3 px-2" key={product.id}>
                    <div className="p-3 w-1/6">
                      <div className=" w-32 h-32 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
                    </div>
                    <div className="w-3/6 flex flex-col flex-grow">
                      <div className="flex justify-between flex-grow  my-2">
                        <div className="flex flex-col">
                          <h4 className="text-black font-semibold text-lg capitalize">{product.title}</h4>
                          <p className="text-md font-normal text-social-color "> Narxi: {formatPrice(product.price * 12500)}</p>
                        </div>
                        <div className="flex flex-col justify-start">
                          {selectAll ? (
                            <>
                              <input type="checkbox" className="w-4 h-4 border " checked />
                            </>
                          ) : (
                            <>
                              <input type="checkbox" className="w-4 h-4 border " />
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col  ">
                          <div className=" text-black border  border-neutral-300 rounded-lg">
                            <button className=" outline-none border-none bg-transparent p-2 text-md"> - </button>
                            <span className="p-2 text-md">{product.quantity}</span>
                            <button className=" outline-none border-none bg-transparent p-2 text-md">+</button>
                          </div>
                        </div>
                        <div className="flex gap-3  mt-4 ">
                          <p className="text-lg font-semibold text-social-color cursor-pointer" onClick={() => deleteProduct(product.id)}>
                            <BiTrash />
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
          </ul>
        </div>
        <div className="rounded-lg bg-grey-50 px-4 py-5 col-span-1">
          <div className="grid grid-cols-2">
            <p className="col-span-1 pr-4 font-medium text-xl">Jami</p>
            <p className="col-span-1 font-medium text-md">15&nbsp;299&nbsp;000 so'm</p>
          </div>
          <div className="grid grid-cols-2 mt-2.5 gap-x-1 text-sm text-grey-900">
            <p className="col-span-1 pr-4 text-grey-400">Tovarlar soni</p>
            <p className="col-span-1 font-normal">1 dona</p>
            <p className="col-span-1 pr-4 text-grey-400">Yetkazib berish</p>
            <div className="col-span-1">
              <p className="text-green-500">Bepul</p>
            </div>
          </div>{" "}
          <div className="hidden md:block pt-4 border-t border-t-grey-100 mt-4">
            <p className="text-xs font-medium text-green-500">Bepul yetkazib berish</p>
            <p className="text-xs text-grey-300">Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika bo'ylab 3 kungacha</p>
          </div>
          <div className="mb-14 pb-4 md:pb-0 md:mb-0 fixed md:static left-0 right-0 px-4 md:px-0 bottom-0 w-full z-10">
            <button type="submit" className="transition duration-200 rounded-lg   disabled:bg-grey-100 disabled:border-grey-100 disabled:text-grey-300 flex items-center justify-center gap-2   bg-primary-500 border-2 border-primary-500 hover:bg-primary-300 hover:border-primary-300 active:bg-primary-600 active:border-primary-600 px-5 py-3 relative mt-4 w-full font-medium  md:!py-3 md:!px-5">
              {" "}
              Muddatli to'lovga olish
            </button>
            <button type="submit" className="transition duration-200 rounded-lg   disabled:bg-grey-100 disabled:border-grey-100 disabled:text-grey-300 flex items-center justify-center gap-2 relative font-medium bg-white border-2 border-grey-200 hover:bg-grey-50 active:bg-grey-100 shadow-md px-5 py-3 mt-2 w-full  md:!py-3 md:!px-5">
              {" "}
              Karta orqali sotib olish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
