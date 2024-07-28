"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import img from '@/assets/HomePage/image.png'; 
import styles from './Carousel.module.css'; 
import { DealOFMonthCarouselData } from '@/lib/constants/DealOfMonthData';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideCount = DealOFMonthCarouselData.length;
  const slideRef = useRef<HTMLDivElement>(null);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideCount - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideCount - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (slideRef.current) {
      const containerWidth = slideRef.current.offsetWidth;
      const slideWidth = containerWidth / (window.innerWidth < 720 ? 1 : 3);
      slideRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='flex flex-col h-[450px] md:h-fit '>
      <div className="relative w-full overflow-hidden">
        <div className="relative">
          <div className={`flex ${styles.slidesWrapper}`} ref={slideRef}>
            {/* Duplicate slides to ensure seamless loop */}
            {DealOFMonthCarouselData.concat(DealOFMonthCarouselData).map((slide, index) => (
              <div
                key={index}
                className={`relative ${styles.slide} ${index === currentIndex ? styles.focused : ''}`}
              >
                <Image src={slide.icon} alt={`Image ${slide}`} width={372} height={486} className='object-center object-fill md:object-cover'  />
                {index === currentIndex && (
                  <div className='absolute bottom-48 md:bottom-20 left-16 z-100  bg-[#D9D9D9] flex p-2 rounded-[8px]'>
                    <div>
                      <h3 className='text-[32px] font-[600] leading-[24px]'>{slide.offer ?? ""}</h3>
                      <p>Sales</p>
                    </div>
                    <span className='font-[600] text-[24px] inline-block -rotate-90 -mr-5 ml-[1px]'>OFF</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='relative flex justify-between md:justify-start md:gap-8 items-center px-4 mt-4'>
        <button
          className={`w-[48px] h-[48px] shadow-lg bg-white rounded-full ${styles.arrow} ${styles.prev}`}
          onClick={goToPrev}
        >
          ❮
        </button>
        <button
          className={`w-[48px] h-[48px] shadow-lg bg-white rounded-full ${styles.arrow} ${styles.next}`}
          onClick={goToNext}
        >
          ❯
        </button>

      <div className={`flex gap-2 items-center justify-center absolute bottom-4 left-0 right-0`}>
        {DealOFMonthCarouselData.map((_, index) => (
            <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            onClick={() => handleDotClick(index)}
            ></button>
        ))}
      </div>
        </div>
    </div>
  );
};

export default Carousel;
