import React, { useContext, useState } from "react";
import Container from "./Container";
import hekto from "../assets/Hekto.png";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Apidata } from "./ContextApi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  let data = useContext(Apidata);
  let [search, setsearch] = useState("");
  let [searchfilter, setsearchfilter] = useState([]);
  let navigate = useNavigate();

  let handlesearch = (e) => {
    setsearch(e.target.value);
    if (e.target.value == "") {
      setsearchfilter([]);
    } else {
      let Filtersearch = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setsearchfilter(Filtersearch);
    }
  };

  let handlecartpage = (item) => {
    navigate(`/products/${item.id}`);
    setsearchfilter([]);
    setsearch("");
    setMenu(false);
  };

  return (
    <section className="py-2 bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-2 gap-4">
          <div className="flex-shrink-0">
            <img className="h-[30px] w-[80px]" src={hekto} alt="logo" />
          </div>

          <ul className="hidden xl:flex items-center gap-x-6 cursor-pointer">
            <Link to="/">
              <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                Home <IoIosArrowDown />
              </li>
            </Link>
            <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
              Pages <IoIosArrowDown />
            </li>
            <Link to="/products">
              <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                Products <IoIosArrowDown />
              </li>
            </Link>
            <Link to="/singleblog">
            <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
              Blog <IoIosArrowDown />
            </li>
            </Link>
            <Link to="/cart">
              <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                Shop <IoIosArrowDown />
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                Contact <IoIosArrowDown />
              </li>
            </Link>
          </ul>

          <div className="hidden xl:flex items-center relative">
            <input
              className="w-[220px] p-2 pr-10 border border-gray-200 outline-none text-[14px]"
              type="text"
              placeholder="Search your product"
              value={search}
              onChange={handlesearch}
            />
            <div className="absolute right-0 top-0 h-full bg-blue-600 px-2 flex items-center">
              <IoIosSearch className="text-white text-[20px]" />
            </div>

            {searchfilter.length > 0 && (
              <div className="absolute top-[40px] right-0 z-[999] bg-blue-600 w-full px-4 h-[400px] overflow-y-scroll">
                {searchfilter.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between flex-wrap cursor-pointer my-4"
                    onClick={() => handlecartpage(item)}
                  >
                    <h2 className="py-2 text-[12px] text-white">
                      {item.title}
                    </h2>
                    <img
                      className="h-[50px] w-[60px]"
                      src={item.thumbnail}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="xl:hidden cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <RxCross2 className="text-[24px] text-[#262626]" />
            ) : (
              <FaBarsStaggered className="text-[24px] text-[#262626]" />
            )}
          </div>
        </div>

        {menu && (
          <div className="xl:hidden pb-4">
            <ul className="flex flex-col gap-y-3 cursor-pointer">
              <Link to="/" onClick={() => setMenu(false)}>
                <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                  Home <IoIosArrowDown />
                </li>
              </Link>
              <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                Pages <IoIosArrowDown />
              </li>
              <Link to="/products" onClick={() => setMenu(false)}>
                <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                  Products <IoIosArrowDown />
                </li>
              </Link>
              <Link to="/singleblog">
                <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                  Blog <IoIosArrowDown />
                </li>
              </Link>
              <Link to="/cart" onClick={() => setMenu(false)}>
                <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                  Shop <IoIosArrowDown />
                </li>
              </Link>
              <Link to="/contact">
                <li className="flex items-center gap-1 text-[16px] font-medium text-[#262626] hover:text-[#FB2E86]">
                  Contact <IoIosArrowDown />
                </li>
              </Link>
            </ul>

            <div className="relative mt-4">
              <input
                className="w-full p-2 pr-10 border border-gray-200 outline-none text-[14px]"
                type="text"
                placeholder="Search your product"
                value={search}
                onChange={handlesearch}
              />
              <div className="absolute right-0 top-0 h-full bg-blue-600 px-2 flex items-center">
                <IoIosSearch className="text-white text-[20px]" />
              </div>

              {searchfilter.length > 0 && (
                <div className="absolute top-[40px] left-0 z-[999] bg-blue-600 w-full px-4 max-h-[300px] overflow-y-scroll">
                  {searchfilter.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between flex-wrap cursor-pointer my-4"
                      onClick={() => handlecartpage(item)}
                    >
                      <h2 className="py-2 text-[12px] text-white">
                        {item.title}
                      </h2>
                      <img
                        className="h-[50px] w-[60px]"
                        src={item.thumbnail}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Navbar;
