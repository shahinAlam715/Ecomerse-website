import React, { useState, useEffect, useRef } from 'react'
import mainbanner from "../assets/mainbanner.png"

const Banner = () => {
  const slides = [mainbanner, mainbanner]
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(true)
  const totalSlides = slides.length

  
  const extendedSlides = [...slides, slides[0]]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => prev + 1)
      setTransitioning(true)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    
    if (current === totalSlides) {
      const timeout = setTimeout(() => {
        setTransitioning(false)
        setCurrent(0)
      }, 700)
      return () => clearTimeout(timeout)
    }
  }, [current, totalSlides])

  return (
    <section className="w-full bg-[#F2F0FF] relative" style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          width: `${extendedSlides.length * 100}%`,
          transform: `translateX(-${(current * 100) / extendedSlides.length}%)`,
          transition: transitioning ? 'transform 0.7s ease-in-out' : 'none',
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} style={{ width: `${100 / extendedSlides.length}%`, flexShrink: 0 }}>
            <img
              src={slide}
              alt={`banner-${index}`}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

     
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrent(index); setTransitioning(true) }}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: (current % totalSlides) === index ? '#fff' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner