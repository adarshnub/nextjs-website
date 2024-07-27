import Image from 'next/image'
import React from 'react'

export type FeatureProps = {
    item:{
        icon:any;
        title:string;
        description:string;
    }
}

const FeatureCard = ({item}:FeatureProps) => {
  return (
    <div className='flex w-full max-w-[277px] py-[9px] gap-[8px]'>
        <div className='items-center flex justify-center'>
            <Image src={item.icon} width={51} height={51} alt="icon" className='w-[25px] md:w-[51px]' />
        </div>
        <div className='text-[#484848] '>
            <h3 className=' font-[500] text-[10px] md:text-[20px] leading-[30px]'>{item.title}</h3>
            <p className='text-[8px] md:text-[16px] font-[400] '>{item.description}</p>
        </div>
    </div>
  )
}

export default FeatureCard