import { volkhov } from "@/app/fonts";
import React from "react";
import ArrivalCard from "./ArrivalCard";
import { NewArrivalsArray } from "@/lib/constants/NewArrivals";

const NewArrivals = () => {
  return (
    <section className="px-[5vw] w-full">
      <h1
        className={`${volkhov.className} text-[48px] font-[400] text-[#484848] leading-[58px] text-center`}
      >
        New Arrivals
      </h1>
      <div className="flex flex-wrap gap-y-[16px] gap-x-[6px] md:gap-[25px] items-center justify-center mt-[25px]">
        {NewArrivalsArray.map((item, index) => (
          <ArrivalCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
