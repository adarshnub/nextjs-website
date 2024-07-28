import React from "react";
// import DealCarousel from './DealCarousel'
import CenterMode from "./CenterMode";
import Carousel from "@/components/ui/carousel/Carousel";
import {  volkhov } from "@/app/fonts";
import Counter from "@/components/common/Counter";

const DealOfMonth = () => {
  return (
    <section className="w-full px-[5vw] lg:px-0 lg:pl-[5vw] flex flex-col lg:flex-row mt-[50px] md:mt-[100px] gap-4">
      <div className="lg:w-1/3 mt-[50px] w-full ">
        <h1
          className={`${volkhov.className} text-[24px] 2xl:text-[48px] font-[400] text-[#484848] mb-[20px] text-center lg:text-start`}
        >
          Deals Of The Month
        </h1>
        <p className="text-[#8A8A8A] max-w-[450px] text-center lg:text-start mx-auto lg:mx-0 text-[12px] 2xl:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
        <div
          className="mt-[40px] mx-auto lg:mx-0 mb-[50px] text-[10px] lg:text-[12px] leading-[12px] font-[500] text-center rounded-[8px] py-[10px] lg:py-[16px]  px-[15px] bg-black text-white cursor-pointer w-[118px] lg:w-[165px] "
          style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
        >
          Buy Now
        </div>

        <h2 className="text-[18px] 2xl:text-[28px] font-[500] text-[#484848] mb-[15px] text-center lg:text-start">
          Hurry, Before It&apos;s Too Late!
        </h2>

        <Counter className="w-full lg:w-fit item-center lg:items-start justify-center" />
      </div>

      <div className="mt-[2rem] lg:w-2/3 items-center flex justify-center my-auto ">
      
        <Carousel />
      </div>
    </section>
  );
};

export default DealOfMonth;
