import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "@/assets/HomePage/logo3.webp";
import logo2 from "@/assets/HomePage/logo4.webp";

const LogoMarquee = () => {
  return (
    <section className="w-full px-[5vw] my-[60px]">
      <Marquee autoFill className="py-[12px] ">
        <Image src={logo1} style={{objectFit:"cover"}} alt="logo 1" className="w-[200px] h-[100px] mx-[15px]"/>
        <Image src={logo2} style={{objectFit:"cover"}} alt="logo 2" className="w-[200px] h-[100px] mx-[15px]"/>
      </Marquee>
    </section>
  );
};

export default LogoMarquee;
