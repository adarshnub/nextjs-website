"use client"

import React, { useState, useEffect } from 'react';
import { digital } from "@/app/fonts";

type CounterType = {
    className?: string;
}

const CountdownTimer = ({className}:CounterType) => {
  // Initial time: 2 days, 2 hours, 2 minutes, 2 seconds
  const initialTime = {
    days: 2,
    hours: 1,
    minutes: 2,
    seconds: 1,
  };

  const [timeLeft, setTimeLeft] = useState({
    days: initialTime.days,
    hours: initialTime.hours,
    minutes: initialTime.minutes,
    seconds: initialTime.seconds,
  });

  useEffect(() => {
    // Calculate the target time
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + initialTime.days);
    targetDate.setHours(targetDate.getHours() + initialTime.hours);
    targetDate.setMinutes(targetDate.getMinutes() + initialTime.minutes);
    targetDate.setSeconds(targetDate.getSeconds() + initialTime.seconds);

    // Function to calculate the remaining time
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    // Initial calculation
    calculateTimeLeft();

    // Set up the interval to update the countdown every second
    const interval = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only on mount

  return (
    <div className={`${className} w-fit flex gap-[20px] xl:gap-[30px]`}>
      <div className="w-fit">
        <div
          className={`${digital.className} counting `}
          style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
        >
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <p className="text-center mt-[15px] text-[#484848] text-[12px] md:text-[24px]">Days</p>
      </div>

      <div className="w-fit">
        <div
          className={`${digital.className} counting `}
          style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
        >
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <p className="text-center mt-[15px] text-[#484848] text-[12px] md:text-[24px]">Hr</p>
      </div>

      <div className="w-fit">
        <div
          className={`${digital.className} counting `}
          style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
        >
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <p className="text-center mt-[15px] text-[#484848] text-[12px] md:text-[24px]">Mins</p>
      </div>

      <div className="w-fit">
        <div
          className={`${digital.className} counting `}
          style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
        >
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <p className="text-center mt-[15px] text-[#484848] text-[12px] md:text-[24px]">Sec</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
