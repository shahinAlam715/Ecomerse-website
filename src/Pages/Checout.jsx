import React from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Checout = () => {

  let data = useSelector((state) => state.product.carItem)

  let { totallprice, totalquantity } = data.reduce((acc, item) => {
    acc.totallprice += item.price * item.quntity
    acc.totalquantity += item.quntity
    return acc;
  }, { totallprice: 0, totalquantity: 0 })

  return (
    <>
     
      <section className='bg-[#F6F5FF] py-[64px]'>
        <Container>
          <h2 className='text-[36px] font-Josefin font-bold text-[#101750] py-4'>
            Shop Grid Default
          </h2>
          <div className="flex items-center py-2 gap-x-2">
            <Link to="/cart">
              <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Cart .</h3>
            </Link>
            <h3 className='text-[#000000] text-[16px] font-Lato font-medium'>Pages .</h3>
            <h3 className='text-[#000000] text-[16px] font-Lato font-medium'>Shop Grid Default</h3>
          </div>
        </Container>
      </section>

     
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">

           
            <div className="lg:col-span-2">
              <div className="bg-[#F8F8FD] p-4 md:p-8 rounded">

               
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <h2 className='font-bold text-[18px] text-[#1D3178]'>Contact Information</h2>
                  <h4 className='text-sm text-[#C1C8E1]'>Already have an account? Log in</h4>
                </div>

                <div className="mt-4">
                  <input
                    type="number"
                    placeholder='Enter your number'
                    className='w-full border-b outline-none py-2'
                  />
                </div>
                <p className='text-sm mt-2 text-[#C1C8E1]'>Keep me updated on offers</p>

               
                <h2 className='font-bold text-[18px] text-[#1D3178] mt-8'>Shipping Address</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input placeholder='First name' className='border-b py-2 outline-none' />
                  <input placeholder='Last name' className='border-b py-2 outline-none' />
                </div>

                <div className="mt-4">
                  <input placeholder='Address' className='w-full border-b py-2 outline-none' />
                </div>

                <div className="mt-4">
                  <input placeholder='Apartment, suite (optional)' className='w-full border-b py-2 outline-none' />
                </div>

                <div className="mt-4">
                  <input placeholder='City' className='w-full border-b py-2 outline-none' />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input placeholder='Country' className='border-b py-2 outline-none' />
                  <input placeholder='Postal Code' className='border-b py-2 outline-none' />
                </div>

               
                <h2 className='font-bold text-[18px] text-[#1D3178] mt-8'>Payment</h2>

                <form className='mt-3 text-sm space-y-2'>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="pay" /> Cash on Delivery
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="pay" /> Bkash
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="pay" /> Nagad
                  </label>
                </form>

               
                <div className="mt-8">
                  <button className='bg-[#FB2E86] text-white px-6 py-2 w-fit hover:opacity-90 transition-opacity'>
                    Continue Shopping
                  </button>
                </div>

              </div>
            </div>

           
            <div>
              <div className="space-y-4">
                {data.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center border-b pb-3">
                    <img
                      src={item.thumbnail}
                      className="w-[60px] h-[60px] object-contain bg-gray-100 rounded shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm font-semibold truncate">{item.title}</h2>
                      <p className="text-xs text-gray-500">Qty: {item.quntity}</p>
                    </div>
                    <h2 className="text-sm font-semibold shrink-0">
                      ${(item.price * item.quntity).toFixed(2)}
                    </h2>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#F4F4FC] p-4 rounded">
                <div className="flex justify-between mb-2">
                  <h2>Items:</h2>
                  <h2>{totalquantity}</h2>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                  <h2>Total:</h2>
                  <h2>${totallprice.toFixed(2)}</h2>
                </div>
                <hr />
                <p className="text-xs text-gray-500 mt-3">
                  Shipping &amp; taxes calculated at checkout
                </p>
                <Link to="/completeorder">
                  <button className='mt-4 w-full bg-green-500 text-white py-2 rounded hover:opacity-90 transition-opacity'>
                    Confirm Order
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}

export default Checout