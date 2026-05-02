import React from 'react'
import { FaSearchPlus, FaShoppingCart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa6'
import Container from './Container'
import { Link } from 'react-router-dom'

const Post = ({allpage, listitem}) => {
  return (
     <section>
        <Container>
            <div className={` ${listitem == "active" ? "grid grid-cols-1 w-[25%] mt-[30px]" : "grid 2xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 mt-[64px]"}`}>
                {allpage.map((item)=>(
                <div  key={item.id} className="my-4">
                     <div className="group relative w-full bg-[#F6F7FB] shadow-[0_0_15px_rgba(0,0,0,5)]">
                      <div className="absolute top-0 left-0 flex gap-x-2 my-3 ml-2 opacity-0 group-hover:opacity-100">
                        <div className="h-[40px] w-[40px] bg-[#EEEFFB] hover:bg-[#00009D] flex items-center justify-center rounded-full">
                          <i><FaShoppingCart  className='text-[#1389FF] hover:text-[#ffff] text-[18px]'/></i>
                        </div>
                         <div className="h-[40px] w-[40px] hover:bg-[#00009D] bg-[#EEEFFB] flex items-center justify-center rounded-full">
                          <i><FaRegHeart  className='text-[#1389FF] text-[20px] hover:text-[#ffff]'/></i>
                        </div>
                         <div className="h-[40px] w-[40px] hover:bg-[#00009D] bg-[#EEEFFB] flex items-center justify-center rounded-full">
                          <i><FaSearchPlus  className='text-[#1389FF] text-[20px] hover:text-[#ffff]'/></i>
                        </div>
                      </div>
                      <div className="pt-[64px] max-w-full 2xs:h-[350px] xl:h-auto flex justify-center">
                       <Link to={`/products/${item.id}`}>
                        <img src={item.thumbnail} alt="feauter" />
                        </Link>
                      
                      </div>
                      <div className="flex justify-center opacity-0 group-hover:opacity-100">
                         <button className='text-[12px] bg-[#08D15F] hover:bg-[#00009D] text-[#ffff] rounded-[4px] w-[150px] py-3 my-2'>View Details</button> 
                      </div>
                      <div className="bg-[#ffff] w-full group-hover:bg-[#00009D]">
                        <div className="">
                        <h2 className='text-[#FB2E86] group-hover:text-[#ffff] text-[14px] font-bold font-Lato text-center py-4'>{item.title}</h2>
                        </div>
                        <div className="flex items-center justify-center gap-x-2 py-2">
                          <div className="h-[4px] w-[14px] bg-[#05E6B7]"></div>
                          <div className="h-[4px] w-[14px] bg-[#F701A8]"></div>
                          <div className="h-[4px] w-[14px] bg-[#00009D]"></div>
                        </div>
                        <div className="">
                          <h3 className='text-[14px] group-hover:text-[#ffff] text-[#151875] font-josefin font-medium text-center py-2'>Code - Y523201</h3>
                        </div>
                        <div className="">
                          <h4 className='text-[14px] text-[#151875] group-hover:text-[#ffff] font-Lato font-medium text-center py-2'>${item.price}</h4>
                        </div>
                      </div>
                  </div>
                </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default Post