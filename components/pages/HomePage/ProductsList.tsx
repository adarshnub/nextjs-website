import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "@/lib/constants/Products";

const ProductsList = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[60px] px-[5vw] w-full place-items-center mt-[84px] lg:max-w-[1600px] mx-auto">
        {Products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </section>
      <div
        className="mt-[34px]  mx-auto text-[10px] lg:text-[12px] leading-[12px] font-[500] text-center rounded-[8px] py-[10px] lg:py-[16px]  px-[15px] bg-black text-white cursor-pointer w-[118px] lg:w-[165px] "
        style={{ boxShadow: "0px 20px 35px 0px #00000026" }}
      >
        View more
      </div>
    </>
  );
};

export default ProductsList;
