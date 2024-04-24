import React, { useRef, useState } from "react"
import { useGetAllProductsQuery } from "../../api/getApis"
import { AdBanner, BrendSlider, CategorySlider, HeaderSlider, Product, ProductsList, SideBar } from "../../components"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"
import { disCount } from "../../assets"
import { TfiMenuAlt } from "react-icons/tfi"
import { CategorySideBar } from "../../components"
import Loader from "../../components/Loader"

const HomePage = () => {
  const [toggleCategory, setToggleCategory] = useState(false)
  const { data, isFetching } = useGetAllProductsQuery()
  if (isFetching) return <Loader />
  return (
    <div className=" mt-5 ">
      <div className="mx-3 md:container  md:mx-auto z-10 ">
        <HeaderSlider />
        <button className="flex lg:hidden bg-main-color text-white p-2 mr-1 text-md rounded-[5px] w-full mt-4 items-center justify-center" onClick={() => setToggleCategory(true)}>
          <TfiMenuAlt /> &nbsp; Категории
        </button>
      </div>
      {/* So'nggi daqiqa takliflari sarlarhasi*/}
      <div className="mx-3 md:container mt-10 md:mx-auto">
        <div className="flex justify-between items-center mt-10">
          <h3 className="font-semibold  text-md md:text-md lg:text-lg xl:text-2xl">Last Offers</h3>
          <Link to={"products"} className=" hidden lg:flex gap-3 items-center text-md text-link-color">
            <span>View all</span> <FaArrowRightLong />{" "}
          </Link>
        </div>
        <div className="mt-4">
          <section className="text-gray-600 body-font">
            <div className="flex flex-wrap  justify-center ">
              {data?.products?.slice(0, 10).map((product, index) => (
                <Product product={product} info={true} key={index} />
              ))}
            </div>
          </section>
        </div>
        <div className="flex  items-center mt-10">
          <h3 className="font-semibold text-md md:text-md lg:text-lg xl:text-2xl self-start">Popular Categories</h3>
        </div>
        <div className=" mt-10 h-44">
          <CategorySlider />
        </div>
      </div>
      <div className="mt-10 py-5 ">
        <AdBanner />
      </div>
      <div className="mx-3 md:container mt-10 md:mx-auto">
        <div className="flex justify-between items-center mt-10">
          <h3 className="font-semibold  text-md md:text-md lg:text-lg xl:text-2xl">Cheaper products</h3>
          <Link to={"products"} className=" hidden lg:flex gap-3 items-center text-md text-link-color">
            <span>View all</span> <FaArrowRightLong />{" "}
          </Link>
        </div>
        <div className="mt-4">
          <section className="text-gray-600 body-font">
            <div className="flex flex-wrap  justify-center ">
              {data?.products?.slice(10, 20).map((product, index) => (
                <Product product={product} info={true} key={index} />
              ))}
            </div>
          </section>
        </div>
        <div className="flex justify-between items-center mt-10">
          <h3 className="font-semibold  text-md md:text-md lg:text-lg xl:text-2xl">Recommadation</h3>
          <Link to={"products"} className=" hidden lg:flex gap-3 items-center text-md text-link-color">
            <span>View all</span> <FaArrowRightLong />{" "}
          </Link>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="hidden lg:block lg:w-2/5 xl:w-1/3 2xl:w-1/4">
            <img src={disCount} alt="discount" className="w-full" />
          </div>
          <div className="w-full lg:w-3/5 xl:w-2/3 2xl:w-3/4">
            <section className="text-gray-600 body-font">
              <div className="flex flex-wrap  justify-center ">
                {data?.products?.slice(20, 28).map((product, index) => (
                  <Product product={product} info={false} key={index} />
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <h3 className="font-semibold  text-md md:text-md lg:text-lg xl:text-2xl">Brends</h3>
        </div>
        <div className="mt-10 py-2 ">
          <BrendSlider />
        </div>
      </div>
      <div>
        <CategorySideBar toggleCategory={toggleCategory} setToggleCategory={setToggleCategory} />
      </div>
    </div>
  )
}

export default HomePage
