import React from 'react'
import uniqfeauter from "../assets/uniqfeauter.png"
import Container from './Container'

const Uniq = () => {
  return (
     <section className='bg-[#F1F0FF] py-[20px] my-[30px]'>
        <Container>
            <div className="grid xl:grid-cols-2">
                <div className="">
                    <img className='2xs:w-[90%] md:w-full xl:w-full' src={uniqfeauter} alt="uniq" />
                </div>
                <div className="">
                    <div className="mt-[84px]">
                        <h2 className='2xs:pr-[60px] sm:text-[38px] md:text-[46px] lg:text-[56px] xl:text-[35px] text-[#151875] font-josefin font-bold xl:pr-[30px]'>Unique Features Of leatest &
                            Trending Poducts</h2>
                    </div>
                    <div className="flex gap-x-4 items-center mt-[20px]">
                        <div className="bg-[#F52B70] h-[12px] w-[12px] rounded-full"></div>
                        <div className="">
                            <h4 className='2xs:text-[12px] sm:text-[20px] md:text-[26px] lg:text-[36px] xl:text-[16px] font-Lato text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</h4>
                        </div>
                    </div>
                     <div className="flex gap-x-4 items-center mt-[20px]">
                        <div className="bg-[#2B2BF5] h-[12px] w-[12px] rounded-full"></div>
                        <div className="">
                            <h4 className='2xs:text-[12px] 2xs:pr-[60px] sm:text-[20px]  md:text-[26px] lg:text-[36px] xl:text-[16px] xl:pr-[100px] font-Lato text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner 
                            blocks and machine nails</h4>
                        </div>
                    </div>
                     <div className="flex gap-x-4 items-center mt-[20px]">
                        <div className="bg-[#2BF5CC] h-[12px] w-[12px] rounded-full"></div>
                        <div className="">
                            <h4 className='2xs:text-[12px] sm:text-[20px]  md:text-[26px] lg:text-[36px] xl:text-[16px] font-Lato text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</h4>
                        </div>
                    </div>

                    <div className=" grid 2xs:grid-cols-1 2xs:my-[30px] md:my-[40px] items-center lg:grid-cols-2 xl:grid-cols-2 xl:my-[64px]">
                        <div className="">
                        <button className='2xs:py-2 2xs:px-4 md:py-6 md:px-10 md:text-[24px] lg:text-[36px] xl:text-[20px] xl:py-4 xl:px-8 bg-[#FB2E86] hover:bg-[blue] text-[#ffff] rounded-[5px] cursor-pointer'>
                            Add To Cart
                        </button>
                        </div>
                        <div className="">
                         <button className='2xs:py-2 2xs:px-4 md:text-[24px] lg:text-[36px] xl:text-[20px] xl:py-4 xl:px-8 hover:bg-[blue] hover:text-[#ffff] text-[#262626] rounded-[5px] cursor-pointer'>
                            B&B Italian Sofa 
                            $32.00
                        </button>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    </section>
  )
}

export default Uniq