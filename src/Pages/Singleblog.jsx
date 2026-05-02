import React from "react";
import Container from "../Components/Container";
import sblog1 from "../assets/sblog1.png"
import sblog2 from "../assets/sblog2.png"
import sblog3 from "../assets/sblog3.png"
import { Link } from "react-router-dom";

const Singleblog = () => {
  return (
    <>
         <section className="bg-[#F6F5FF] py-[64px]">
        <Container>
          <div className="">
            <h2 className="text-[36px] font-Josefin font-bold text-[#101750] py-4">
              Shop Grid Default
            </h2>
            <div className="flex items-center py-2 gap-x-2">
              <Link to="/">
                <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
                  Home .
                </h3>
              </Link>

              <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
                Single Blog .
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
          <div className="my-4">
            <div className="">
              <img className="h-auto w-full" src={sblog1} alt="blog" />
            </div>
            <div className="">
              <h2 className="text-[36px] font-bold font-popiens my-2 text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-[16px] font-medium font-popiens my-2 text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at..
              </p>
            </div>
          </div>
          <div className="my-4">
            <div className="">
              <img className="h-auto w-full" src={sblog2} alt="blog" />
            </div>
            <div className="">
              <h2 className="text-[36px] font-bold font-popiens my-2 text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-[16px] font-medium font-popiens my-2 text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at..
              </p>
            </div>
          </div>
          <div className="my-4">
            <div className="">
              <img className="h-auto w-full" src={sblog3} alt="blog" />
            </div>
            <div className="">
              <h2 className="text-[36px] font-bold font-popiens my-2 text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-[16px] font-medium font-popiens my-2 text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at..
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Singleblog;
