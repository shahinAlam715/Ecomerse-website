import React from 'react'
import Container from '../Components/Container'
import contact from "../assets/contact.png"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>

     <section className='bg-[#F6F5FF] py-[64px]'>
                <Container>
                    <div className="">
                        <h2 className='text-[36px] font-Josefin font-bold text-[#101750] py-4'>Shop Grid Default</h2>
                        <div className="flex items-center py-2 gap-x-2">
                                <Link to="/">
                                <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Home .</h3>
                                </Link>
                           
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Contact .</h3>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Shop Grid Default</h3>
                        </div>
                    </div>
                </Container>
                </section>



    <section className='my-[64px]'>
        <Container>
            <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 items-center">
                <div className="p-2">
                    <h2 className='text-[36px] font-bold font-popiens my-2 text-[#151875]'>Get In Touch</h2>
                    <p className='text-[16px] font-medium font-popiens my-2 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                    <form>
                        <input required className='w-full py-2 pl-2 my-2 outline-none border-2 rounded-[5px] border-[#8A8FB9]' type="text" placeholder='Your Name*'/>
                         <input required className='w-full py-2 pl-2 my-2 outline-none border-2 rounded-[5px] border-[#8A8FB9]' type="email" placeholder='Your E-mail'/>
                          <input required className='w-full py-2 pl-2 my-2 outline-none border-2 rounded-[5px] border-[#8A8FB9]' type="text" placeholder='Subject*'/>
                        <textarea required className='w-full h-[200px] py-2 pl-2 my-2 outline-none border-2 rounded-[5px] border-[#8A8FB9]' name="" id="" placeholder='Type Your Messege*'></textarea>
                    <button type='submit' className='bg-[#FB2E86] text-white px-6 py-2 w-fit hover:opacity-90 transition-opacity'>Send Mail</button>
                    </form>
                </div>
                <div className="p-2">
                    <img className='h-auto w-full' src={contact} alt="" />
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Contact