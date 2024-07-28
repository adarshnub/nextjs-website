"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import stars from '@/assets/HomePage/stars.png'
import Image from "next/image";
import { volkhov } from "@/app/fonts";
import per1 from '@/assets/HomePage/per1.png'

export const cards = [
  {
    title:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    description: "James K.",
    role: "Architect",
  },
  {
    title:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    description: "Rohit B.",
    role: "React Developer",
  },
  {
    title:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    description: "Sara Termble.",
    role: "Tester",
  },
  {
    title:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    description: "Anand K.",
    role: "Analyst",
  },
  {
    title:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    description: "Manu T.",
    role: "Python Developer",
  },
];

const VariableWidthHeightCarousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      return updatedIndexes;
    });
  };

  // Replace image data with card data
 

  const positions = ["center", "left1", "left", "right", "right1"];

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0, zIndex: 2 },
    right: { x: "90%", scale: 0, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="lg:flex items-center flex-col justify-center hidden  ">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg p-6 min-w-[300px] max-w-[800px] shadow-xl w-full h-[300px] absolute flex flex-col md:flex-row md:gap-[40px] "
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%" }}
        >
            <Image src={per1} alt="person image" width={263} height={263} className="" />
          <div className="max-w-2/3 w-full flex flex-col gap-[10px] ">
            <p>
              {card.title}
            </p>
            <Image src={stars} alt="rating" />
            <div className="w-full bg-black h-[1px]" />
            <h2 className={` ${volkhov.className} font-[400] text-[20px]`}>{card.description}</h2>
            <p className="text-[#484848]">{card.role}</p>
          </div>
        </motion.div>
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="shadow-lg mt-[400px]  rounded-full p-3 text-[20px] "
          onClick={handleBack}
        >
          {"<"}
        </button>
        <button
          className=" mt-[400px] shadow-lg  rounded-full p-3 text-[20px]"
          onClick={handleNext}
        >
         {">"}
        </button>
      </div>
    </div>
  );
};

export default VariableWidthHeightCarousel;
