import { volkhov } from "@/app/fonts";
import TestimonialCarousel from "@/components/common/TestimonialCarousel/TestimonialCarousel";
import TestimonialMobileCarousel from "@/components/common/TestimonialCarousel/TestimonialMobileCarousel";

import React from "react";

const Testimonial = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="px-[5vw] mt-[40px]">
      <h1
        className={` ${volkhov.className} text-[#484848] text-[24px] font-[400] text-center px-[10vw] lg:text-[46px]`}
      >
        This Is What Our Customers Say
      </h1>
      <p className="text-[12px] lg:text-[16px] font-[400] text-[#8A8A8A] text-center mt-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
      </p>
      <TestimonialCarousel />
      <div className="w-full block lg:hidden mt-[24px]">
        <TestimonialMobileCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
