import React, { useContext, useState } from 'react'
import Container from './Container'
import { FaHeart, FaSearchPlus, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Apidata } from './ContextApi'
import { Link } from 'react-router-dom'

const Latestproduct = () => {
    const data = useContext(Apidata)
    const [currentIndex, setCurrentIndex] = useState(0)

    const getVisibleCount = () => {
        const w = window.innerWidth
        if (w >= 1280) return 4
        if (w >= 1024) return 2
        return 1
    }

    const [visibleCount, setVisibleCount] = useState(getVisibleCount)

    React.useEffect(() => {
        const handleResize = () => {
            const newCount = getVisibleCount()
            setVisibleCount(newCount)
            setCurrentIndex(0)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalSlides = Math.max(0, data.length - visibleCount)

    const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0))
    const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, totalSlides))

    const itemWidthPercent = 100 / visibleCount

    return (
        <section>
            <Container>
                <div className="my-[64px]">
                    <h2 className='text-[48px] text-[#262626] text-center font-bold font-popiens'>
                        Featured Products
                    </h2>
                </div>

                <div className="relative flex items-center">

                   
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="absolute left-[-0px] z-10 h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#00009D] text-white text-[18px] shadow-lg transition-all duration-200 hover:bg-[#FB2E86] hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[#00009D]"
                        aria-label="Previous"
                    >
                        <FaChevronLeft />
                    </button>

                   
                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-x-4"
                            style={{
                                transform: `translateX(calc(-${currentIndex} * (${itemWidthPercent}% + 16px / ${visibleCount})))`,
                            }}
                        >
                            {data.map((item, index) => (
                                <div
                                    key={item.id || index}
                                    className="flex-shrink-0 bg-[#F7F7F7] rounded-[2px] group"
                                    style={{
                                        minWidth: `calc(${itemWidthPercent}% - ${(visibleCount - 1) * 16 / visibleCount}px)`,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.06)'
                                    }}
                                >
                                    <div className="p-2">
                                        <div className="flex gap-x-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="cursor-pointer hover:bg-[rgba(46,26,196,0.15)] h-[30px] w-[30px] rounded-full flex justify-center items-center">
                                                <FaShoppingCart className='text-[#1389FF]' />
                                            </div>
                                            <div className="cursor-pointer hover:bg-[rgba(46,26,196,0.15)] h-[30px] w-[30px] rounded-full flex justify-center items-center">
                                                <FaHeart className='text-[#1389FF]' />
                                            </div>
                                            <div className="cursor-pointer hover:bg-[rgba(46,26,196,0.15)] h-[30px] w-[30px] rounded-full flex justify-center items-center">
                                                <FaSearchPlus className='text-[#1389FF]' />
                                            </div>
                                        </div>

                                        <Link to="/products">
                                            <div className="flex justify-center py-4 h-[160px] items-center">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    className="max-h-full object-contain"
                                                />
                                            </div>
                                        </Link>

                                        <div className="flex justify-center pb-2">
                                            <button className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-[#08D15F] px-4 py-2 text-white rounded-[5px]'>
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white shadow-xl group-hover:bg-[#00009D] transition-colors duration-300 py-4">
                                        <h2 className='text-[16px] text-[#FB2E86] group-hover:text-white transition-colors duration-300 text-center font-bold font-popiens px-2 truncate'>
                                            {item.title}
                                        </h2>
                                        <div className="flex justify-center gap-x-2 mt-2">
                                            <div className="h-[5px] w-[14px] bg-[#05E6B7] rounded-2xl"></div>
                                            <div className="h-[5px] w-[14px] bg-[#F701A8] rounded-2xl"></div>
                                            <div className="h-[5px] w-[14px] bg-[#00009D] rounded-2xl"></div>
                                        </div>
                                        <h3 className='text-[14px] text-[#151875] group-hover:text-white transition-colors duration-300 text-center font-bold font-popiens my-2'>
                                            Code - Y523201
                                        </h3>
                                        <h4 className='text-[14px] text-[#151875] group-hover:text-white transition-colors duration-300 text-center font-bold font-popiens'>
                                            ${item.price}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                   
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= totalSlides}
                        className="absolute right-[-0px] z-10 h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#00009D] text-white text-[18px] shadow-lg transition-all duration-200 hover:bg-[#FB2E86] hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[#00009D]"
                        aria-label="Next"
                    >
                        <FaChevronRight />
                    </button>
                </div>

              
                {totalSlides > 0 && (
                    <div className="flex justify-center gap-x-2 mt-8">
                        {Array.from({ length: totalSlides + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-[8px] rounded-full transition-all duration-300 ${
                                    currentIndex === i ? 'w-[24px] bg-[#00009D]' : 'w-[8px] bg-[#D9D9D9]'
                                }`}
                            />
                        ))}
                    </div>
                )}

            </Container>
        </section>
    )
}

export default Latestproduct