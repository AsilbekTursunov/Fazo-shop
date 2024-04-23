import React from "react"
import Logo from "../assets/images/FrameWhite.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa"
const Footer = () => {
  return (
    <div className=" bg-footer-color py-10">
      <div className="mx-3 md:container md:mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-4 md:w-1/4 lg:w-2/5 my-4">
          <img src={Logo} alt="" width={100} height={24} />
          <div className="text-white">
            <p className="py-2">
              Call center opening hours <br />
              Monday - Saturday: 9:00–18:00
            </p>
            <p className="py-2">
              Call-center:
              <br />+ 998 (71) 205-93-93
            </p>
          </div>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/fazo.kz/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-[50%] border-main border p-2 flex items-center justify-center text-white bg-main text-xl">
              <FaTelegramPlane />
            </a>
            <a href="https://www.facebook.com/fazo.kz/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-[50%] border-social-color border p-2 flex items-center justify-center text-social-color text-xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/fazo.kz/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-[50%] border-social-color border p-2 flex items-center justify-center text-social-color text-xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/fazo-kz/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-[50%] border-social-color border p-2 flex items-center justify-center text-social-color text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-full lg:w-3/5 my-4">
          <div className="flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="text-social-color text-md flex flex-col gap-2">
              <li>Laptops</li>
              <li>Gaming chairs</li>
              <li>Phones</li>
              <li>Monoblocks</li>
              <li>Memory modules</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">
            <h3 className="text-lg font-semibold text-white">General</h3>
            <ul className="text-social-color text-md flex flex-col gap-2">
              <li>News</li>
              <li>About Us</li>
              <li>Our stores</li>
              <li>Privacy Policy</li>
              <li>Loyalty program rules</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="text-social-color text-md flex flex-col gap-2">
              <li>Purchase by installments</li>
              <li>Shipping and payment</li>
              <li>Rules for purchasing with cashback</li>
              <li>Return/Exchange</li>
              <li>Rules for using coupons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
