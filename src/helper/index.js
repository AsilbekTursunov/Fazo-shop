import React, { useEffect, useState } from "react"

export const formatPrice = price => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export const ScreenClientSize = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 1280) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return { activeMenu, screenSize }
}
export const SetItem = (key, data) => {
  localStorage.setItem(key, data)
}
export const GetItem = key => {
  return localStorage.getItem(key)
}
