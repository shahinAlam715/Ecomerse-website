import React from 'react'
import Container from '../Components/Container'
import com from "../assets/com.png"
import { Link } from 'react-router-dom'

const Completeorder = () => {
  return (
    <>
     
      <section className='bg-[#F6F5FF] py-10 sm:py-[64px]'>
        <Container>
          <div>
            <h2 className='text-[24px] sm:text-[36px] font-Josefin font-bold text-[#101750] py-2 sm:py-4'>
              Shop Grid Default
            </h2>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Link to="/products">
                <h3 className='text-[#000] text-[14px] sm:text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>
                  products .
                </h3>
              </Link>

              <h3 className='text-[#000] text-[14px] sm:text-[16px] font-Lato font-medium'>
                Pages .
              </h3>

              <h3 className='text-[#000] text-[14px] sm:text-[16px] font-Lato font-medium'>
                Shop Grid Default
              </h3>
            </div>
          </div>
        </Container>
      </section>

      
      <section className="py-10 sm:py-[64px]">
        <Container>
          <div className="flex flex-col items-center text-center">

          
            <img
              className='h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] rounded-full'
              src={com}
              alt="completed"
            />

            
            <h2 className='text-[22px] sm:text-[36px] font-bold font-popiens text-[#101750] mt-4'>
              Your Order Is Completed!
            </h2>

           
            <p className='text-[14px] sm:text-[16px] font-medium font-sans text-[#8D92A7] mt-3 max-w-[900px] px-4 sm:px-6 lg:px-0 leading-relaxed'>
              Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
              You will receive an email confirmation when your order is completed.
            </p>

           
            <div className="mt-6 sm:mt-[30px]">
              <Link to="/products">
                <button className='cursor-pointer text-[14px] sm:text-[16px] px-5 sm:px-6 py-2 rounded-[10px] bg-[#FB2E86] text-[#fff]'>
                  Continue Shopping
                </button>
              </Link>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}

export default Completeorder