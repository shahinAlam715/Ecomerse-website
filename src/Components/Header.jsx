import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { productRemove } from "./CounterSlice";

const Header = () => {
  let data = useSelector((state) => state.product.carItem);
  let dispatch = useDispatch();

  let handleremove = (i) => {
    dispatch(productRemove(i));
  };

  let [cartt, setcartt] = useState(false);
  let carttref = useRef();

  
  useEffect(() => {
    const handleClick = (e) => {
      if (carttref.current && !carttref.current.contains(e.target)) {
        setcartt(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="bg-[#7E33E0] w-full text-white py-2">
      <Container>
       
        <div className="flex flex-col lg:flex-row justify-between items-center py-3 gap-3">
         
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <MdOutlineMail />
              <span className="break-all">mhhasanul@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FiPhone />
              <span>(12345)67890</span>
            </div>
          </div>

         
          <div className="flex items-center flex-wrap justify-center gap-4 text-sm sm:text-base">
          
            <div className="flex items-center gap-1 cursor-pointer">
              <span>English</span>
              <IoIosArrowDown />
            </div>

           
            <div className="flex items-center gap-1 cursor-pointer">
              <span>USD</span>
              <IoIosArrowDown />
            </div>

           
            <Link to="/login" className="flex items-center gap-1">
              <CiUser />
              <span className="hidden sm:block">Login</span>
            </Link>

           
            <div className="flex items-center gap-1">
              <CiHeart />
              <span className="hidden sm:block">Wishlist</span>
            </div>

           
            <div className="relative" ref={carttref}>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setcartt(!cartt)}
              >
                <IoCartOutline />

                <span className="hidden sm:block">Cart</span>

                {data.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FB2E86] text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {data.length}
                  </span>
                )}
              </div>

             
              {cartt && data.length > 0 && (
                <div className="absolute right-0 mt-3 w-[300px] sm:w-[350px] bg-white text-black shadow-lg rounded z-50">
                  {data.map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-12 gap-2 p-2 border-b"
                    >
                      <div className="col-span-4">
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-full h-[60px] object-cover"
                        />
                      </div>

                      <div className="col-span-6 text-sm">
                        <h2 className="line-clamp-1">{item.title}</h2>
                        <p>${item.price}</p>
                      </div>

                      <div
                        className="col-span-2 flex items-center justify-center cursor-pointer"
                        onClick={() => handleremove(i)}
                      >
                        <RxCross2 />
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between p-3 gap-2">
                    <Link to="/cart">
                      <button className="bg-[#FB2E86] text-white px-3 py-2 text-sm rounded">
                        View Cart
                      </button>
                    </Link>

                    <Link to="/checout">
                      <button className="bg-[#FB2E86] text-white px-3 py-2 text-sm rounded">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
