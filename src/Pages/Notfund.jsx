import React from 'react'
import Container from '../Components/Container'
import notfund from "../assets/404.png"
import { Link } from 'react-router-dom'

const Notfund = () => {
  return (
    <section>
        <Container>
            <div className="mb-[64px] flex justify-center">
                <img className='h-auto min-w-full' src={notfund} alt="404" />
            </div>
            <div className="my-[20px] flex justify-center">
                <Link to="/">
                  <button className=' cursor-pointer text-[16px] px-6 py-2
                      rounded-[10px] bg-[#FB2E86] text-[#fff]'>Back to Home</button>
                </Link>
            </div>
        </Container>
    </section>
  )
}

export default Notfund