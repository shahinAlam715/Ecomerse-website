import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from "react-icons/io5";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaRegHeart,
  FaSearchPlus,
  FaShoppingCart,
  FaTwitter,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import Container from "../Components/Container";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Components/CounterSlice";

const Productdetials = () => {
  //  Productdetails start //
  let productid = useParams();
  let [singleproduct, setsingleproduct] = useState([]);

  let getid = () => {
    axios
      .get(`https://dummyjson.com/products/${productid.id}`)
      .then((response) => {
        setsingleproduct(response.data);
      });
  };

  useEffect(() => {
    getid();
  }, []);

  let Clientrating = (rating) =>
    Array.from({ length: 5 }, (_, index) => {
      let number = index + 0.5;
      return singleproduct.rating > index + 1 ? (
        <IoStarSharp className="text-[24px] text-[gold]" />
      ) : singleproduct.rating > number ? (
        <IoStarHalfSharp className="text-[24px] text-[gold]" />
      ) : (
        <IoStarOutline className="text-[24px] text-[gold]" />
      );
    });

  //  Productdetails end //

  // Move CartPage //

  let dispacth = useDispatch();
  let navigate = useNavigate();

  let handlecart = (item) => {
    dispacth(addtoCart({ ...item, quntity: 1 }));
    toast("Add to Cart Succesfull");
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };

  let handlecartt = (item) => {
    dispacth(addtoCart({ ...item, quntity: 1 }));
    toast("Add to Cart Succesfull");
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };

  //related product//

  let [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (singleproduct?.category) {
      axios
        .get(
          `https://dummyjson.com/products/category/${singleproduct.category}`,
        )
        .then((res) => {
          const others = res.data.products.filter(
            (item) => item.id !== singleproduct.id,
          );
          setRelatedProducts(others);
        })
        .catch((err) => console.log(err));
    }
  }, [singleproduct]);

  // Slider start //

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const totalSlides = Math.max(0, relatedProducts.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides));
  };

  // mmainimg // ismallimg //

  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    if (singleproduct?.thumbnail) {
      setMainImg(singleproduct.thumbnail);
    }
  }, [singleproduct]);

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
                  Product .
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

      <section>
        <Container>
          <div className="my-[64px]">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2  bg-[#F6F5FF] py-2 px-2">
              <div className="grid grid-cols-12 px-2 py-2">
                <div className="col-span-4 h-[583px] overflow-y-scroll cursor-auto">
                  {relatedProducts.map((item) => (
                    <div
                      className="bg-[#FB2E86] my-2"
                      key={item.id}
                      onClick={() => setsingleproduct(item)}
                    >
                      <img src={item.thumbnail} alt="" />
                    </div>
                  ))}
                </div>
                <div className="col-span-8 mx-auto mt-[0%] bg-[#fff]">
                  <img
                    className="w-full mt-[50%]"
                    src={singleproduct.thumbnail}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="mt-[64px]">
                  <h2 className="text-[36px] font-Josefin font-bold text-[#0D134E] my-2">
                    {singleproduct.title}
                  </h2>
                </div>

                <div className="flex my-2">
                  {Clientrating(singleproduct.rating)}
                  <div className="px-2">({singleproduct.rating})</div>
                </div>

                <div className="flex gap-x-4 items-center my-2">
                  <div className="mt-1">
                    <h2 className="text-[16px] font-Josefin text-[#151875]">
                      ${singleproduct.price}
                    </h2>
                  </div>
                  <div className="">
                    <del className="text-[16px] font-Josefin text-[#FB2E86]">
                      ${singleproduct.discountPercentage}
                    </del>
                  </div>
                </div>

                <div className="my-2">
                  <h2 className="text-[16px] font-Josefin text-[#151875]">
                    Color {singleproduct.color}
                  </h2>
                </div>

                <div className=" pr-2 my-2">
                  <h2 className="text-[16px] font-Josefin text-[#A9ACC6] font-blod leading-[30px]">
                    {singleproduct.description}
                  </h2>
                </div>

                <div className="flex items-center gap-x-4 my-[64px] justify-center">
                  <div className="" onClick={() => handlecart(singleproduct)}>
                    <button
                      className="text-[16px] font-Josefin text-[#151875] px-6 py-2 bg-[#fff]
                                         rounded-[10px] hover:bg-[#FB2E86] hover:text-[#fff]"
                    >
                      Add To cart
                    </button>
                  </div>

                  <div className="">
                    <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick={false}
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                  </div>

                  <div className="">
                    <FaRegHeart className="text-[24px]" />
                  </div>
                </div>

                <div className="flex items-center gap-x-3 my-4">
                  <div className="">
                    <h2 className="text-[16px] font-Josefin text-[#151875]">
                      Categories :
                    </h2>
                  </div>
                  <div className="">
                    <h2 className="text-[16px] font-Josefin text-[#FB2E86] capitalize">
                      {singleproduct.category}
                    </h2>
                  </div>
                </div>

                <div className="my-4 flex items-center gap-x-3">
                  <div className="">
                    <h2 className="text-[16px] font-Josefin text-[#151875]">
                      Tags :
                    </h2>
                  </div>
                  <div className="">
                    <h2 className="text-[16px] font-Josefin text-[#FB2E86] capitalize">
                      {singleproduct.tags}
                    </h2>
                  </div>
                </div>

                <div className="flex gap-x-3 items-center mt-4">
                  <div className="">
                    <h2 className="text-[16px] font-Josefin text-[#151875]">
                      Share :
                    </h2>
                  </div>
                  <div className="flex gap-x-2">
                    <div className="h-[30px] w-[30px] rounded-full bg-[#151875] pt-1.5 hover:bg-[#FB2E86]">
                      <FaFacebookF className="text-[#fff] mx-auto leading-[30px] text-[18px]" />
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#151875] pt-1.5 hover:bg-[#FB2E86]">
                      <RiInstagramFill className="text-[#fff] mx-auto leading-[30px] text-[18px]" />
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#151875] pt-1.5 hover:bg-[#FB2E86]">
                      <FaTwitter className="text-[#fff] mx-auto leading-[30px] text-[18px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-[64px] bg-[#F9F8FE] py-[64px]">
        <Container>
          <div className="">
            <div className="grid grid-cols-4 gap-x-2">
              <div className="">
                <h2 className="text-[16px] font-Josefin text-[#151875]">
                  Description
                </h2>
              </div>
              <div className="">
                <h2 className="text-[16px] font-Josefin text-[#151875]">
                  Additional Info
                </h2>
              </div>
              <div className="">
                <h2 className="text-[16px] font-Josefin text-[#151875]">
                  Reviews
                </h2>
              </div>
              <div className="">
                <h2 className="text-[16px] font-Josefin text-[#151875]">
                  Video
                </h2>
              </div>
            </div>

            <div className="mt-[64px]">
              <h2 className="text-[22px] font-Josefin text-[#151875] my-4">
                Varius tempor.
              </h2>
              <p className="text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                Velit consectetur neque, elit, aliquet. Non varius proin sed
                urna, egestas consequat laoreet diam tincidunt. Magna eget
                faucibus cras justo, tortor sed donec tempus. Imperdiet
                consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
                fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>

            <div className="mt-[50px]">
              <div className="">
                <h2 className="text-[22px] font-Josefin text-[#151875] my-4">
                  More details
                </h2>
              </div>
              <div className="flex gap-x-2 items-center mt-2">
                <div className="">
                  <IoMdArrowRoundForward className="text-[24px]" />
                </div>
                <div className="">
                  <p className="text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
              </div>
              <div className="flex gap-x-2 items-center mt-2">
                <div className="">
                  <IoMdArrowRoundForward className="text-[24px]" />
                </div>
                <div className="">
                  <p className="text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
              </div>

              <div className="flex gap-x-2 items-center mt-2">
                <div className="">
                  <IoMdArrowRoundForward className="text-[24px]" />
                </div>
                <div className="">
                  <p className="text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
              </div>
              <div className="flex gap-x-2 items-center mt-2">
                <div className="">
                  <IoMdArrowRoundForward className="text-[24px]" />
                </div>
                <div className="">
                  <p className="text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mb-[64px]">
        <Container>
          <div className="my-[64px]">
            <h2 className="text-[24px] md:text-[32px] lg:text-[48px] text-[#262626] text-center font-bold">
              Related Products
            </h2>
          </div>

          <div className="relative flex items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 z-10 h-[40px] w-[40px] md:h-[45px] md:w-[45px] rounded-full flex items-center justify-center bg-[#00009D] text-white shadow-lg hover:bg-[#FB2E86] disabled:opacity-30"
            >
              <FaChevronLeft />
            </button>

            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-4"
                style={{
                  transform: `translateX(-${currentIndex * (window.innerWidth >= 1280 ? 25 : window.innerWidth >= 1024 ? 50 : 100)}%)`,
                }}
              >
                {relatedProducts.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="
                min-w-full 
                lg:min-w-[calc(50%-8px)] 
                xl:min-w-[calc(25%-12px)] 
                bg-[#F7F7F7] flex-shrink-0 rounded group
              "
                  >
                    <div className="p-3">
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-gray-200">
                          <FaShoppingCart className="text-[#1389FF]" />
                        </div>
                        <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-gray-200">
                          <FaHeart className="text-[#1389FF]" />
                        </div>
                        <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-gray-200">
                          <FaSearchPlus className="text-[#1389FF]" />
                        </div>
                      </div>

                      <div
                        className="flex justify-center py-4 h-[140px] md:h-[160px] items-center cursor-pointer"
                        onClick={() => handlecartt(item)}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="max-h-full object-contain"
                        />
                      </div>

                      <div className="flex justify-center pb-2">
                        <button className="opacity-0 group-hover:opacity-100 transition cursor-pointer bg-[#08D15F] px-4 py-1 text-white rounded">
                          View Details
                        </button>
                      </div>
                    </div>

                    <div className="bg-white group-hover:bg-[#00009D] transition py-3">
                      <h2 className="text-[14px] md:text-[16px] text-[#FB2E86] group-hover:text-white text-center font-bold px-2 truncate">
                        {item.title}
                      </h2>

                      <h4 className="text-[13px] md:text-[14px] text-[#151875] group-hover:text-white text-center font-bold mt-2">
                        ${item.price}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= totalSlides}
              className="absolute right-0 z-10 h-[40px] w-[40px] md:h-[45px] md:w-[45px] rounded-full flex items-center justify-center bg-[#00009D] text-white shadow-lg hover:bg-[#FB2E86] disabled:opacity-30"
            >
              <FaChevronRight />
            </button>
          </div>

          {totalSlides > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-[6px] rounded-full transition ${
                    currentIndex === i
                      ? "w-[20px] bg-[#00009D]"
                      : "w-[6px] bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Productdetials;
