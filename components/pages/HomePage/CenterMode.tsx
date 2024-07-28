"use client";

import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import img from '@/assets/HomePage/image.png';
import Image from 'next/image';
import { NextArrow, PrevArrow } from '@/components/ui/CustomArrows'; // Import custom arrows

const CenterMode: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [leftMostSlide, setLeftMostSlide] = useState<number>(0);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const handleAfterChange = (current: number) => {
    const totalSlides = 6; // Update this based on the number of slides
    const slidesToShow = 3; // Number of slides to show at a time
    const centerIndex = Math.floor(slidesToShow / 2);

    // Calculate the left-most index based on the center slide
    const newLeftMostSlide = (current - centerIndex + totalSlides) % totalSlides;
    setLeftMostSlide(newLeftMostSlide);
  };

  // Use useEffect to ensure the slider starts at the left-most item
  useEffect(() => {
    if (initialLoad) {
      sliderRef.current?.slickGoTo(leftMostSlide);
      setInitialLoad(false);
    }
  }, [leftMostSlide, initialLoad]);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px", // Adjust the padding as needed
    slidesToShow: 3,
    speed: 500,
    arrows: false, // Disable default arrows
    dots: true,
    initialSlide: leftMostSlide, // Start at the left-most slide
    afterChange: handleAfterChange, // Update left-most slide index after change
    prevArrow: <PrevArrow className="slick-prev" onClick={handlePrevClick} />,
    nextArrow: <NextArrow className="slick-next" onClick={handleNextClick} />,
  };

  return (
    <div className="relative slider-container">
      <Slider {...settings} ref={sliderRef}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`slide ${index === leftMostSlide ? 'left-most' : ''}`}
          >
            <Image src={img} alt={`Image ${index + 1}`} width={372} height={486} />
          </div>
        ))}
      </Slider>
      <div className="absolute -bottom-8 left-4 flex gap-8">
        <PrevArrow className="arrowLeft" onClick={handlePrevClick} />
        <NextArrow className="arrowRight" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default CenterMode;
