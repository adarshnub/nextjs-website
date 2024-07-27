import React from "react";
import HeroText from "./HeroText";
import img1 from "@/assets/HomePage/img1.png";
import img2 from "@/assets/HomePage/img2.png";
import img3 from "@/assets/HomePage/img3.png";
import img4 from "@/assets/HomePage/img4.png";
import Image from "next/image";

type MobileHeroProps = {
    className?:string;
}
const MobileHerosection = ({className}:MobileHeroProps) => {
  return (
    <div className={`w-full block lg:hidden  ${className}`}>
      <Image src={img1} width={349} height={126} alt="image 1" className="w-full rounded-[6px]" />

      <div className="flex items-center justify-center gap-[10px] sm:gap-[16px] my-[18px]">
        <Image src={img2} width={92} height={126} alt="image 2" className="rounded-[6px] h-[125px] w-full" />
        <HeroText className="h-[132px] " />
        <Image src={img3} width={92} height={126} alt="image 3" className="rounded-[6px] h-[125px] w-full" />
      </div>
      <Image src={img4} width={349} height={126} alt="image 4" className="w-full rounded-[6px] " />
    </div>
  );
};

export default MobileHerosection;
