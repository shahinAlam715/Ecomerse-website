import React from 'react'
import Hekto from "../assets/Hekto.png"
import { FaFacebookF, FaTwitter } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import Container from './Container'


const Fotter = () => {
  return (
     <>
     <section className="bg-[#EEEFFB] py-[70px]">
        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10">

           
            <div className="xl:col-span-2">

              <img src={Hekto} alt="logo" className="w-[120px]" />

             <div className="flex mt-8">
                <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="2xs:w-full xl:w-[300px] px-4 py-3 outline-none bg-white border border-gray-200"
                />

                <button className="bg-[#FB2E86] px-6 text-white hover:bg-[#e81c74] transition">
                    Sign Up
                </button>
            </div>

              <div className="mt-6 text-[#8A8FB9] leading-7">
                <h3 className="font-semibold text-[16px]">Contact Info</h3>
                <p>
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>

            </div>


           
            <div>
              <h3 className="font-bold text-[20px] mb-5 text-[#151875]">
                Categories
              </h3>

              <ul className="space-y-3 text-[#8A8FB9]">
                <li className="hover:text-[#FB2E86] cursor-pointer">Laptops & Computers</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Cameras & Photography</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Smart Phones & Tablets</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Video Games & Consoles</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Waterproof Headphones</li>
              </ul>
            </div>


           
            <div>
              <h3 className="font-bold text-[20px] mb-5 text-[#151875]">
                Customer Care
              </h3>

              <ul className="space-y-3 text-[#8A8FB9]">
                <li className="hover:text-[#FB2E86] cursor-pointer">My Account</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Discount</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Returns</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Orders History</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Order Tracking</li>
              </ul>
            </div>


           
            <div>
              <h3 className="font-bold text-[20px] mb-5 text-[#151875]">
                Pages
              </h3>

              <ul className="space-y-3 text-[#8A8FB9]">
                <li className="hover:text-[#FB2E86] cursor-pointer">Blog</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Browse the Shop</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Category</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Pre-Built Pages</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Visual Composer Elements</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">WooCommerce Pages</li>
              </ul>
            </div>

          </div>

        </Container>
      </section>


     

      <section className="bg-[#E7E4F8] py-5">
        <Container>

          <div className="flex justify-between items-center flex-wrap gap-4">

            <p className="text-[#8A8FB9] text-[14px]">
              ©Webecy - All Rights Reserved
            </p>

            <div className="flex gap-4">

              <div className="h-[32px] w-[32px] bg-[#151875] rounded-full flex items-center justify-center hover:bg-[#FB2E86] transition cursor-pointer">
                <FaFacebookF className="text-white text-[13px]" />
              </div>

              <div className="h-[32px] w-[32px] bg-[#151875] rounded-full flex items-center justify-center hover:bg-[#FB2E86] transition cursor-pointer">
                <RiInstagramFill className="text-white text-[15px]" />
              </div>

              <div className="h-[32px] w-[32px] bg-[#151875] rounded-full flex items-center justify-center hover:bg-[#FB2E86] transition cursor-pointer">
                <FaTwitter className="text-white text-[13px]" />
              </div>

            </div>

          </div>

        </Container>
      </section>
    </>
  )
}

export default Fotter