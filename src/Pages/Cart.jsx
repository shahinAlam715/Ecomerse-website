import React from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import feauter1 from "../assets/feauter1.png";
import { ImCross } from "react-icons/im";
import { FaPlus, FaRegWindowMinimize } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  productRemove,
} from "../Components/CounterSlice";

const Cart = () => {
  let data = useSelector((state) => state.product.carItem);

  let { totallprice, totalquantity } = data.reduce(
    (acc, item) => {
      acc.totallprice += item.price * item.quntity;
      acc.totalquantity += item.quntity;

      return acc;
    },
    { totallprice: 0, totalquantity: 0 },
  );

  let dispatch = useDispatch();

  let handleincrement = (i) => {
    dispatch(increment(i));
  };

  let handledecrement = (i) => {
    dispatch(decrement(i));
  };

  let handleRemove = (i) => {
    dispatch(productRemove(i));
  };

  return (
    <>
      <section className="bg-[#F6F5FF] py-[64px]">
        <Container>
          <div className="">
            <h2 className="text-[36px] font-Josefin font-bold text-[#101750] py-4">
              Shop Grid Default
            </h2>
            <div className="flex items-center py-2 gap-x-2">
              <Link to="/products">
                <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
                  Products .
                </h3>
              </Link>

              <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
                Pages .
              </h3>
              <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
                Shop Grid Default
              </h3>
            </div>
          </div>
        </Container>
      </section>

      {data.length > 0 ? (
        <section className="mt-[64px]">
          <Container>
            <div>
              <div className="hidden xl:grid grid-cols-12 my-4">
                <div className="col-span-3">
                  <h2 className="text-[20px] text-[#1D3178] font-Josefin font-bold">
                    Product
                  </h2>
                </div>
                <div className="col-span-2">
                  <h2 className="text-[20px] text-[#1D3178] text-center font-Josefin font-bold">
                    Price
                  </h2>
                </div>
                <div className="col-span-2">
                  <h2 className="text-[20px] text-[#1D3178] text-center font-Josefin font-bold">
                    Quantity
                  </h2>
                </div>
                <div className="col-span-2">
                  <h2 className="text-[20px] text-[#1D3178] text-center font-Josefin font-bold">
                    Total
                  </h2>
                </div>
                <div className="col-span-3">
                  <h2 className="text-[20px] text-[#1D3178] text-center font-Josefin font-bold">
                    Cart Totals
                  </h2>
                </div>
              </div>

              <div className="flex flex-col xl:grid xl:grid-cols-12 gap-6 xl:gap-0 my-6 xl:my-[64px]">
                <div className="w-full xl:col-span-9">
                  {data.map((item, i) => (
                    <div
                      key={i}
                      className="
                    xl:grid xl:grid-cols-12 xl:items-center xl:my-8
                    flex flex-col sm:flex-row sm:items-center gap-4
                    border xl:border-0 border-[#E8E6F1] rounded-lg xl:rounded-none
                    p-4 xl:p-0 mb-4 xl:mb-0
                  "
                    >
                      <div className="xl:col-span-5 w-full">
                        <div className="xl:grid xl:grid-cols-12 xl:items-center xl:gap-x-3 flex items-center gap-3">
                          <div className="xl:col-span-5 bg-[#8080805e] relative shrink-0">
                            <img
                              src={item.thumbnail}
                              alt="img"
                              className="w-[80px] xl:w-full h-auto"
                            />
                            <div className="absolute top-[-10px] right-[-15px]">
                              <div
                                className="px-2 py-2 w-[33px] rounded-full bg-[#000000] cursor-pointer"
                                onClick={() => handleRemove(i)}
                              >
                                <ImCross className="text-[#fff]" />
                              </div>
                            </div>
                          </div>
                          <div className="xl:col-span-7">
                            <h2>{item.title}</h2>
                            <h4 className="my-2">{item.id}</h4>
                            <h5>{item.category}</h5>
                          </div>
                        </div>
                      </div>

                      <div className="xl:col-span-2 flex items-center gap-2 xl:block">
                        <span className="text-[#1D3178] font-bold text-sm xl:hidden">
                          Price:
                        </span>
                        <h2 className="xl:ml-1">${item.price}</h2>
                      </div>

                      <div className="xl:col-span-3">
                        <div className="flex mx-2 gap-x-3">
                          <div
                            className="border-1 h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
                            onClick={() => handleincrement(i)}
                          >
                            <FaPlus className="mx-auto" />
                          </div>
                          <div className="border-1 h-[40px] w-[40px] flex items-center justify-center">
                            <h2 className="text-center leading-[40px] text-[20px]">
                              {item.quntity}
                            </h2>
                          </div>
                          <div
                            className="border-1 h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
                            onClick={() => handledecrement(i)}
                          >
                            <FaRegWindowMinimize className="mx-auto mt-1.5" />
                          </div>
                        </div>
                      </div>

                      <div className="xl:col-span-2 flex items-center gap-2 xl:block">
                        <span className="text-[#1D3178] font-bold text-sm xl:hidden">
                          Total:
                        </span>
                        <h2 className="xl:ml-[25%]">
                          {(item.price * item.quntity).toFixed(2)}
                        </h2>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-col sm:flex-row justify-between gap-3 px-4 mt-4 xl:mt-4">
                    <button className="bg-[#FB2E86] text-[16px] font-Josefin text-[#fff] h-[50px] w-full sm:w-[150px] rounded-[2px]">
                      Update Cart
                    </button>
                    <button
                      className="bg-[#FB2E86] text-[16px] font-Josefin text-[#fff] h-[50px] w-full sm:w-[150px] rounded-[2px]"
                      onClick={() => setData([])}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                <div className="w-full xl:col-span-3 xl:mt-8">
                  <div className="bg-[#F4F4FC] px-4 py-2 rounded-[10px] xl:h-[300px] w-full">
                    <div className="flex justify-between items-center mt-[30px]">
                      <h2 className="text-[18px] text-[#1D3178] font-Lato font-bold">
                        Subtotals :
                      </h2>
                      <h2 className="text-[18px] font-Josefin text-[#15245E]">
                        {totalquantity}
                      </h2>
                    </div>
                    <hr className="text-[#E8E6F1] my-2" />

                    <div className="flex justify-between mt-8">
                      <h2 className="text-[18px] text-[#1D3178] font-Lato font-bold">
                        Totals :
                      </h2>
                      <h2 className="text-[18px] font-Josefin text-[#15245E]">
                        {totallprice.toFixed(2)}
                      </h2>
                    </div>
                    <hr className="text-[#E8E6F1] my-2" />

                    <div className="flex items-center gap-x-3 mt-8">
                      <div className="h-[30px] w-[30px] bg-[#19D16F] rounded-full pt-1">
                        <MdOutlineKeyboardArrowDown className="text-[24px] mx-auto text-[#fff]" />
                      </div>
                      <h2 className="text-[12px] font-Lato text-[#8A91AB]">
                        Shipping &amp; taxes calculated at checkout
                      </h2>
                    </div>

                    <div className="mt-8">
                      <Link to="/login">
                        <button className="text-[16px] font-Lato text-[#fff] bg-[#19D16F] h-[50px] rounded-[3px] w-full">
                          Proceed To Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : (
        <div className="w-full h-[400px] bg-[#FB2E86]">
          <h2 className="text-[#fff] text-center leading-[400px] text-[70px] font-Josefin">
            No Data
          </h2>
        </div>
      )}
    </>
  );
};

export default Cart;
