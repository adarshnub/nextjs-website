import Image from "next/image";
import React from "react";

const ProductCard = ({item}:any) => {
  return (
    <div
      className="px-[25px] py-[15px] md:w-full"
      style={{ boxShadow: "0px 40px 90px 0px #0000000F" }}
    >
      <Image src={item.icon} width={336} height={244} className="border-[1px] border-black rounded-[10px] md:w-full" alt="product image" />
    </div>
  );
};

export default ProductCard;
