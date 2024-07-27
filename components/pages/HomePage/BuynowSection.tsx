import React from "react";
import bg from "@/assets/HomePage/slider3.png";
import Image from "next/image";
import { volkhov } from "@/app/fonts";
import { FeatureArry } from "@/lib/constants/Features";
import FeatureCard from "./FeatureCard";

const BuynowSection = () => {
  return (
    <section className="w-full px-[5vw] ">
      <div className="bg-[#D9D9D9] flex w-full">
        <Image
          src={bg}
          width={822}
          height={570}
          alt="bg image"
          className="w-full"
        />
        <div className="pl-[20px] max-w-1/2 w-full">
          <h2
            className={` ${volkhov.className} font-[400] text-[18px] xl:text-[45px] leading-[59px] text-[#484848] mt-[18px] xl:mt-[67px]`}
          >
            Sartoris
          </h2>
          <h4 className="font-[400] text-[10px] xl:text-[20px] underline underline-offset-2 leading-[30px] mt-[17px] xl:mt-[44px]">
            DESCRIPTION
          </h4>
          <ul className="font-[400] text-[10px] xl:text-[20px] text-[#4A4A4A] mt-[17px]">
            <li>High Fabric Wallpaper</li>
            <li>Water proof</li>
            <li> 1024” * 800”</li>
          </ul>
          <h3 className="font-[500] text-[10px] xl:text-[23px] leading-[35px] mt-[17px] xl:mt-[50px]">
            ₹9,999.00
          </h3>
          <div
            className="mt-[17px] mb-[20px] xl:mt-[20px] text-[10px] lg:text-[12px] leading-[12px] font-[500] text-center rounded-[8px] py-[10px] lg:py-[16px]  px-[15px] bg-black text-white cursor-pointer w-[118px] lg:w-[165px] "
            style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
          >
            Buy Now
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-x-[20vw] lg:gap-x-[40px] gap-y-[8px] lg:grid-cols-4 my-[72px] place-items-center">
        {FeatureArry.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BuynowSection;
