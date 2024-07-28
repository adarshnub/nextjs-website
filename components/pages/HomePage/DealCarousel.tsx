"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import img from '@/assets/HomePage/image.png';
import Image from 'next/image';

const carouselSettings = {
  dots: true,
  className: "center",
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  arrows: false,
  customPaging: (i: number) => (
    <button className="customArrow">•</button>
  ),
};

const Carousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const handleAfterChange = (current: number) => {
    setCenterIndex(current);
  };

  return (
    <div className="relative w-full">
      <Slider 
        {...carouselSettings} 
        ref={sliderRef}
        afterChange={handleAfterChange}
        className="carouselWrapper"
      >
        <div className={`slide ${centerIndex === 0 ? 'larger' : ''}`}>
          <Image src={img} alt="Image 1" width={372} height={486} />
        </div>
        <div className={`slide ${centerIndex === 1 ? 'larger' : ''}`}>
          <Image src={img} alt="Image 2" width={372} height={486} />
        </div>
        <div className={`slide ${centerIndex === 2 ? 'larger' : ''}`}>
          <Image src={img} alt="Image 3" width={372} height={486} />
        </div>
        {/* Add more slides if needed */}
      </Slider>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between w-full px-4">
        <button 
          className="arrowLeft bg-gray-200 text-black p-2 rounded-full"
          onClick={handlePrevClick}
        >
          ❮
        </button>
        <button 
          className="arrowRight bg-gray-200 text-black p-2 rounded-full"
          onClick={handleNextClick}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
