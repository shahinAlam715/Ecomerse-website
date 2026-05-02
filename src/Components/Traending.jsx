import React from 'react'
import ten1 from "../assets/ten1.png"
import ten2 from "../assets/ten2.png"
import ten3 from "../assets/ten3.png"
import ten4 from "../assets/ten4.png"
import tendinglist1 from "../assets/tendinglist1.png"
import tendinglist2 from "../assets/tendinglist2.png"
import tendinglist3 from "../assets/tendinglist3.png"
import Container from './Container'


const Traending = () => {
  return (
     <>
    <section>
        <Container>
            
            <div className="xl:mt-[40px]">
               <h2 className='xs:text-[32px] sm:text-[38px] md:text-[48px] lg:text-[62px] xl:text-[42px] font-josefin font-bold text-center text-[#151875]'>Trending Products</h2>
            </div>
           
            <div className="grid 2xs:grid-cols-1 2xs:my-0 sm:grid-cols-2 xl:grid-cols-4 xl:my-[30px]">
                <div className="">
                    <img className='w-full' src={ten1} alt="ten" />
                </div>
                 <div className="">
                    <img className='w-full' src={ten2} alt="ten" />
                </div>
                 <div className="">
                    <img className='w-full' src={ten3} alt="ten" />
                </div>
                 <div className="">
                    <img className='w-full' src={ten4} alt="ten" />
                </div>
            </div>
        </Container>
    </section>


    <section className='my-[40px]'>
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center">
                <div className="">
                    <img className='w-full xl:h-[450px]' src={tendinglist1} alt="tenlist" />
                </div>
                 <div className="">
                    <img className='w-full xl:h-[450px]' src={tendinglist2} alt="tenlist" />
                </div> 
                <div className="lg:gap-x-2 lg:col-span-2 lg:flex lg:justify-between xl:block xl:col-span-1">
                    <div className="">
                    <img className='w-full lg:h-[100px]' src={tendinglist3} alt="tenlist" />
                    </div>
                     <div className="my-2">
                    <img className='w-full lg:h-[100px]' src={tendinglist3} alt="tenlist" />
                    </div>
                     <div className="">
                    <img className='w-full lg:h-[100px]' src={tendinglist3} alt="tenlist" />
                    </div>
                </div>
            </div>
        </Container>
    </section>

   </>
  )
}

export default Traending