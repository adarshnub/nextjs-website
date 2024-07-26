import React from "react";
import HeroText from "./HeroText";
import img1 from "@/assets/HomePage/img1.png";
import img2 from "@/assets/HomePage/img2.png";
import img3 from "@/assets/HomePage/img3.png";
import img4 from "@/assets/HomePage/img4.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full px-[5vw]">
      <div className="flex gap-[27px]">
        <Image src={img1} alt="image 1" className="h-[294px] w-full"/>
        <Image src={img2} alt="image 2" className="h-[506px]" />
      </div>

      <div className="flex gap-[30px] -mt-[11.5rem]">
        <Image src={img3} alt="image 3" />
        <div className="w-full">
          <HeroText className="ml-[6rem]  2xl:ml-[16rem]" />
          <Image src={img4} alt="image 4" className="mt-[14px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
