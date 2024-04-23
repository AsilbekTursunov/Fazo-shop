import React, { useState } from "react"
import Slider from "react-slider"
import { formatPrice } from "../../helper"
import "./pricerange.css"
const MIN = 100000,
  MAX = 5000000
const PriceRange = ({setRangePrice}) => {
  const [values, setValues] = useState([MIN, MAX])
  setRangePrice(values) 
  return (
    <div className="app">
      <div className="w-full ">
        <h3 className="text-md font-normal text-black">Price (cум)</h3>
        <div className="my-6">
        <Slider className="relative slider h-[2px]   text-main w-full" value={values} min={100000} max={5000000} onChange={setValues} step={100000} minDistance={200000}/> 
        </div>
        <div className="flex flex-col gap-4">
          <input type="text" className="p-3 border border-neutral-400 rounded-md outline-none " defaultValue={'dan'} value={formatPrice(values[0])} />
          <input type="text" className="p-3 border border-neutral-400 rounded-md outline-none " defaultValue={'gacha'} value={formatPrice(values[1])} />
        </div>
      </div>
    </div>
  )
}

export default PriceRange
