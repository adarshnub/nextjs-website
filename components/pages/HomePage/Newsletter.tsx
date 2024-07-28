import React from "react";
import Image from "next/image";
import sub from "@/assets/HomePage/sub.png";
import { volkhov } from "@/app/fonts";

const Newsletter = () => {
  return (
    <section className="w-full px-[5vw] flex flex-col md:flex-row justify-center items-center mt-[50px] gap-[20px] lg:gap-[40px] 2xl:gap-[60px]">
      <Image src={sub} alt="newsletter image" width={726} height={722} className="w-[266px] lg:w-[726px]" />

      <div className="md:w-1/2 ">
        <h2 className={` ${volkhov.className} text-[24px] md:text-[46px] text-[#484848] text-center`}>
          Subscribe To Our Newsletter
        </h2>
        
        <p className="text-[#8A8A8A] mt-[20px] text-center max-w-[614px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
        <h5 className="text-[16px] md:text-[22px] mt-[24px] md:mt-[58px] text-[#8A8A8A] p-[14px] lg:p-[30px] shadow-lg rounded-[10px] max-w-[631px] mx-auto">michael@ymail.com</h5>

        <div
            className="mx-auto mb-[20px] mt-[30px] text-[10px] lg:text-[12px] leading-[12px] font-[500] text-center rounded-[8px] py-[10px] lg:py-[16px]  px-[15px] bg-black text-white cursor-pointer w-[118px] lg:w-[165px] "
            style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
          >
            Subscribe Now
          </div>
      </div>
    </section>
  );
};

export default Newsletter;
