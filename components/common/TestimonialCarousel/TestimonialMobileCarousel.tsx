"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { cards } from "./TestimonialCarousel";
import stars from "@/assets/HomePage/stars.png";
import Image from "next/image";
import { volkhov } from "@/app/fonts";
import per1 from "@/assets/HomePage/per1.png";
import { NextArrow, PrevArrow } from "@/components/ui/CustomArrows";

export default function TestimonialMobileCarousel() {
   
        let sliderRef = useRef(null);
        const next = () => {
          if (sliderRef.current) {
            (sliderRef.current as any).slickNext();
          }
        };
        const previous = () => {
          if (sliderRef.current) {
            (sliderRef.current as any).slickPrev();
          }
        };
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          
          
        };
  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef} className="max-w-[500px] mx-auto w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-lg p-[10px]  shadow-xl w-full "
          >
          <div className="flex w-full justify-between gap-[24px]">
          
           <Image
              src={per1}
              alt="person image"
              width={73}
              height={73}
              className=""
            />
           
            <div className="max-w-2/3 w-full flex flex-col gap-[10px]">
              <p className="text-[10px]">{card.title}</p>
              <div className="w-full bg-black h-[1px]" />
              <div className="flex w-full justify-between">
              <h2 className={`${volkhov.className} font-[400] text-[12px]`}>
                {card.description}
              </h2>
              <Image src={stars} alt="rating" />
              </div>
              <p className="text-[#484848] text-[8px]">{card.role}</p>
            </div>
          </div>
          </div>
        ))}
      </Slider>
      {/* Custom navigation buttons */}
      <div style={{ textAlign: "center" }} className="mt-[40px] flex justify-center items-center gap-[20px]">
        <button className="button text-[29px] w-[40px] border rounded-full shadow-lg" onClick={previous}>
          {"<"}
        </button>
        <button className="button text-[29px] w-[40px] border rounded-full shadow-lg" onClick={next}>
          {">"}
        </button>
      </div>
    </div>
  );
}
