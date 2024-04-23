import React, { useEffect, useState } from "react"
import { useGetAllProductsQuery, useGetSingleProductQuery } from "../../api/getApis"
import { useParams } from "react-router-dom"
import { Loader, ProductSlider, ProductsList } from "../../components"
import { ScreenClientSize } from "../../helper"
const ProductDetail = () => {
  const { slug } = useParams()
  const [simProducts, setSimProducts] = useState()
  const { data, isFetching1 } = useGetSingleProductQuery(slug)
  const { data: product, isFetching2 } = useGetAllProductsQuery()
  const [bgimage, setBgImage] = useState("")
  const { screenSize } = ScreenClientSize()
  if (isFetching1 && isFetching2) return <Loader />
  useEffect(() => {
    const similarProducts = product?.products.filter(item => item.category == data?.category)
    setSimProducts(similarProducts)
  }, [product, data])
  const getStars = rate => {
    const count = []
    const stars = rate < 4.5 ? 4 : 5
    for (let i = 0; i < stars; i++) {
      count.push(i)
    }
    return count
  }
  console.log(simProducts)
  return (
    <div className="md:container md:mx-auto">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-3 lg:px-5 py-24 mx-auto">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full flex flex-row lg:hidden lg:py-6 mt-6 lg:mt-0 h-96">
              <ProductSlider images={data?.images} />
            </div>
            <div className="lg:w-1/2 w-full hidden lg:flex flex-row  lg:py-6 mt-6 lg:mt-0">
              <div className="flex flex-col justify-between my-2 w-32">
                {data?.images?.map(image => (
                  <div style={{ backgroundImage: `url(${image})` }} alt="image" className=" w-3/4 h-20 active:border-2 bg-contain bg-no-repeat bg-center active:border-orange-400" onClick={() => setBgImage(image)}>
                    {" "}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center w-full h-96">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgimage ? bgimage : data?.thumbnail})` }}></div>
              </div>
            </div>
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">{data?.brand}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {getStars(data?.rating).map(_ => (
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">{data?.stock} Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{data?.description}</p>

              <div className="flex flex-wrap items-center">
                <span className="title-font font-medium text-lg lg:text-2xl text-gray-900">$58.00</span>
                <button className="flex ml-auto text-white bg-main border-0 py-2 px-6 focus:outline-none  rounded text-md lg:text-2xl">Add Cart</button>
                <button className="rounded-full w-10 h-10 bg-white p-0 border inline-flex items-center justify-center text-social border-neutral-400 ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 mx-4 md:mx-0">
        <ProductsList info={true} data={simProducts} />{" "}
      </section>
    </div>
  )
}

export default ProductDetail

{
  /**
<section className="flex mt-10">
        <div className="w-2/5">
          <div className="flex flex-row">
            <div className="flex flex-col justify-between my-2 w-32">
              {data?.images?.map(image => (
                <div style={{ backgroundImage: `url(${image})` }} alt="image" className=" w-3/4 h-20 active:border-2 bg-contain bg-no-repeat bg-center active:border-orange-400">
                  {" "}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full h-96">
              <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${data?.thumbnail})` }}></div>
            </div>
          </div>
        </div>
      </section>
*/
}
