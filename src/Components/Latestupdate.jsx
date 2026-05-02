import React from 'react'
import update from "../assets/update.png"
import update1 from "../assets/update1.png"
import Container from './Container'

const Latestupdate = () => {
  return (
    <section className='mt-[64px]'>
            <div className="">
                <img className='w-full' src={update} alt="update" />
            </div>
            <Container>
                <div className="my-2">
                    <img className='w-full' src={update1} alt="update1" />
                </div>
            </Container>
        </section>
  )
}

export default Latestupdate