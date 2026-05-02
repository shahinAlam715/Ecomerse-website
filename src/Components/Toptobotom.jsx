import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] rounded-full bg-[#FB2E86] hover:bg-navy text-white flex items-center justify-center text-[18px] sm:text-[20px] cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300 z-[999] hover:bg-[#000080]"
    >
      <FaArrowUp />
    </div>
  )
}

export default ScrollTop