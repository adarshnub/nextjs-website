import React from 'react'
import Image from 'next/image'
import t8 from "@/assets/HomePage/t8.png";

const ArrivalCard = ({item}:any) => {
  return (
    <div className='w-fit'>
        <Image src={item.icon} width={120} height={125} alt="icons" className='rounded-[14px] w-[63px] md:w-[120px] border-[1px] border-black' />
        <p className='text-center mt-[13px] hidden md:flex'>{item.text}</p>
    </div>
  )
}

export default ArrivalCard