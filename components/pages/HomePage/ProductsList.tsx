import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "@/lib/constants/Products";

const ProductsList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[60px] px-[5vw] w-full place-items-center mt-[84px] lg:max-w-[1200px] mx-auto">
     {Products.map((item,index) => (
         <ProductCard key={index} item={item} />
     ))}
    </section>
  );
};

export default ProductsList;
