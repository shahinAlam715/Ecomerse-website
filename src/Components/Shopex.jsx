import React from 'react'
import soffer1 from "../assets/soffer1.png"
import soffer2 from "../assets/soffer2.png"
import soffer3 from "../assets/soffer3.png"
import soffer4 from "../assets/soffer4.png"
import Container from './Container'

const Shopex = () => {
  return (
     <section>
        <Container>
            <div className="">
               <h2 className='lg:text-[56px] xl:text-[42px] font-josefin font-bold text-center text-[#151875]'>What Shopex Offer!</h2>
            </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 my-[64px]">

                    <div className="bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.15)] p-4 cursor-pointer hover:bg-[#ffc0cb9a]">
                        <div className="flex justify-center mt-[30px]">
                            <img src={soffer1} alt="offer" />
                        </div>
                        <div className="my-4">
                            <h2 className='lg:text-[36px] xl:text-[22px] text-[#151875] text-center font-josefin font-medium'>24/7 Support</h2>
                        </div>
                        <div className="mb-[30px]">
                            <p className='lg:text-[30px] xl:text-[16px] text-center text-[#1A0B5B4D] px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>

                      <div className="bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.15)] p-4 cursor-pointer hover:bg-[#ffc0cb9a]">
                        <div className="flex justify-center mt-[30px]">
                            <img src={soffer2} alt="offer" />
                        </div>
                        <div className="my-4">
                            <h2 className='lg:text-[36px] xl:text-[22px] text-[#151875] text-center font-josefin font-medium'>24/7 Support</h2>
                        </div>
                        <div className="mb-[30px]">
                            <p className='lg:text-[30px] xl:text-[16px] text-center text-[#1A0B5B4D] px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>

                      <div className="bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.15)] p-4 cursor-pointer hover:bg-[#ffc0cb9a]">
                        <div className="flex justify-center mt-[30px]">
                            <img src={soffer3} alt="offer" />
                        </div>
                        <div className="my-4">
                            <h2 className='lg:text-[36px] xl:text-[22px] text-[#151875] text-center font-josefin font-medium'>24/7 Support</h2>
                        </div>
                        <div className="mb-[30px]">
                            <p className='lg:text-[30px] xl:text-[16px] text-center text-[#1A0B5B4D] px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>


                      <div className="bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.15)] p-4 cursor-pointer hover:bg-[#ffc0cb9a]">
                        <div className="flex justify-center mt-[30px]">
                            <img src={soffer4} alt="offer" />
                        </div>
                        <div className="my-4">
                            <h2 className='lg:text-[36px] xl:text-[22px] text-[#151875] text-center font-josefin font-medium'>24/7 Support</h2>
                        </div>
                        <div className="mb-[30px]">
                            <p className='lg:text-[30px] xl:text-[16px] text-center text-[#1A0B5B4D] px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default Shopex