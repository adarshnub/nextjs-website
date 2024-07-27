import React from "react";
type HeroProps = {
    className?:string;
}
const HeroText = ({className}:HeroProps) => {
  return (
    <div className={`w-fit ${className}`}>
      <h1
        className="text-[#484848] font-[500] text-[28px] lg:text-[50px] leading-[29px] lg:leading-[68px] "
        style={{
          letterSpacing: "-0.04em",
        }}
      >
        ULTIMATE
      </h1>
      <div
        className="font-[500] text-[58px] lg:text-[100px] text-outline leading-[58px] lg:leading-[80px]"
         data-text="SALE"
        style={{  letterSpacing: "-0.055em" }}
      >
        SALE
      </div>
     
          <div
          className="text-[10px] lg:text-[12px] leading-[12px] font-[500] text-center rounded-[8px] py-[10px] lg:py-[16px] mx-auto px-[15px] bg-black text-white cursor-pointer w-[118px] lg:w-[165px] mt-1"
          style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
        >
          Sign up
        
        </div>
    </div>
  );
};

export default HeroText;
