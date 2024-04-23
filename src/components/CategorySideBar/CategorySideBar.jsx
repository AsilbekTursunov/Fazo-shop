import React from "react"
import { brandLogo } from "../../assets"
import { Link } from "react-router-dom"

import { RxCross2 } from "react-icons/rx"
import { IoIosPhonePortrait, IoIosLaptop } from "react-icons/io"
import { GiWifiRouter, GiCctvCamera, GiMouse } from "react-icons/gi"
import { FaComputer, FaKitchenSet } from "react-icons/fa6"
import { CgDrive } from "react-icons/cg"
import { FaHeadphonesAlt } from "react-icons/fa"
import { MdOutlineWifiCalling3 } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io"

const CategorySideBar = ({ toggleCategory, setToggleCategory }) => {
  return (
    <div className={`w-3/4 h-screen bg-white absolute ${toggleCategory ? "left-0" : "-left-3/4"} top-0 z-[100] duration-[.5s] p-3`}>
      <div className="flex justify-between items-center">
        <div>
          <img src={brandLogo} alt="brand-log" width={120} height={32} />
        </div>
        <div className="text-lg" onClick={() => setToggleCategory(false)}>
          <RxCross2 />
        </div>
      </div>
      <ul className="flex flex-col gap-5 mt-10">
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <IoIosPhonePortrait />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Телефоны, планшеты</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <IoIosLaptop />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Ноутбуки</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <GiWifiRouter />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Сетевое оборудование</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <GiCctvCamera />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Видеонаблюдение</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <FaComputer />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Компьютеры</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <CgDrive />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Техника для офиса</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <FaHeadphonesAlt />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Аксессуары</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <FaKitchenSet />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Товары для дома</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <GiMouse />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">Периферийные устройства</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-3xl text-neutral-400 px-3">
              <MdOutlineWifiCalling3 />
            </span>
            <Link to="/">
              <span className="text-black font-normal text-sm">IP Телефония</span>
            </Link>
          </div>
          <span className="text-md text-social-color p-2">
            <IoIosArrowForward />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default CategorySideBar
