import Image from "next/image";
import React from "react";
import rating from '@/assets/HomePage/stars.png'
import { ProductType } from "@/lib/constants/Products";

const ProductCard = ({item}:ProductType) => {
  
  return (
    <div
      className="px-[25px] py-[15px] md:w-full cursor-pointer"
      style={{ boxShadow: "0px 40px 90px 0px #0000000F" }}
    >
      <Image src={item.icon} width={336} height={244} className="border-[1px] border-black rounded-[10px] md:w-full" alt="product image" />
      <div className="flex justify-between w-full mt-[12px] mb-[36px]">
      <div className="font-[500] flex flex-col">
      <h2 className="text-[20px]  text-[#484848] leading-[30px]">{item.title ?? ""}</h2>
      <h6 className="text-[12px]  mt-1">{item.description?? ""}</h6>
      <h4 className="text-[12px]  text-[#484848] mt-[25px]">(4.1k) Customer Reviews</h4>
      <h1 className="text-[24px]  text-[#484848] mt-[25px]">{item.price ?? ""}</h1>
      </div>
      <div className="flex flex-col justify-between">
        <Image src={rating} alt="rating icon" />
        <h6 className="text-[12px] font-[400] text-[#FF4646]">{item.status ?? ""}</h6>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
