import React, { useEffect, useState } from "react"
import { useGetAllProductsQuery, useGetAllCategoriesQuery } from "../../api/getApis"
import { Accordion, Loader, PriceRange, ProductsList } from "../../components"

const SearchProducts = () => {
  const { data, isFetching } = useGetAllProductsQuery()
  const [rangePrice, setRangePrice] = useState()
  if (isFetching) return <Loader /> 
  console.log(rangePrice);
  return (
    <div className="mx-3 md:container md:mx-auto flex flex-col p-2">
      <div className="text-social-color text-md p-4">MAin / Telephone and Tablets / Telephones and Gadgets</div>
      <div className="flex justify-between">
        <div className="w-1/5  flex flex-col  mx-2">
          <div className="text-lg text-black font-semibold mb-5">Smartphones in Tashkent</div>
          <div className="border rounded-md  p-3">
            <PriceRange setRangePrice={setRangePrice} />
            <div className="  my-2 flex flex-col">
              <h3 className="text-md font-normal text-black my-2">Availability</h3>
              <div className="p-3 border rounded-md w-full flex items-center">
                <input type="checkbox" name="getProduct" id="product" className="  bg-main-color  text-main  w-4 h-4" />
                <label htmlFor="product" className="ml-4 text-md font-normal text-black">
                  Pick up today
                </label>
              </div>
            </div>
            <Accordion title={"Brends"} categories={["LG", "Samsung", "Artel", "Huawei"]} />
            <Accordion title={"Battery capacity"} categories={["1821 мА⋅ч", "3000 мА⋅ч", "4500 мА⋅ч", "5000 мА⋅ч"]} />
            <Accordion title={"Manufacturer country"} categories={["Vietnam", "Chine", "Artel ", "Huawei"]} />
            <Accordion title={"Number of Cores"} />
            <Accordion title={"Front-camera"} />
            <Accordion title={"Photocamera"} />
            <Accordion title={"OS version"} />
            <Accordion title={"Headphone jack"} /> 
            <div className="flex">
              <button className="bg-main-color block w-full text-white rounded-sm p-1">See more</button>
            </div>
          </div>
        </div>
        <div className="w-4/5">
          <ProductsList info={true} data={data.products} count={0} rangePrice={rangePrice} />
        </div>
      </div>
    </div>
  )
}

export default SearchProducts
