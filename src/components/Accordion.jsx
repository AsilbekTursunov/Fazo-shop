import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

const Accordion = ({ title, categories }) => {
  const [accordion, setAccordion] = useState(false)
  return (
    <div className="  flex flex-col">
      <button className="text-md font-normal text-black my-2 flex justify-between items-center" onClick={() => setAccordion(prevState => !prevState)}>
        <span>{title}</span> <span>{accordion ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </button>
      <ul className={`w-full ${accordion ? "flex" : "hidden"} flex-col items-center gap-3 duration-[1s] p-2`}>
        {categories?.map(item => (
          <li className=" w-full flex items-center">
            <input type="checkbox" name="getProduct" id="lg" className="  bg-main-color  text-main  w-4 h-4" />
            <label htmlFor="lg" className="ml-4 text-md font-normal text-black">
              {item} <span className="text-link-color">(30)</span>
            </label>
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default Accordion
