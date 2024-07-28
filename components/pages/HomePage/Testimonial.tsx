import TestimonialCarousel from '@/components/common/TestimonialCarousel/TestimonialCarousel';
import TestimonialMobileCarousel from '@/components/common/TestimonialCarousel/TestimonialMobileCarousel';

import React from 'react'

const Testimonial = () => {

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className='px-[5vw]'>
         <TestimonialCarousel />
         <div className='w-full block lg:hidden'>
            <TestimonialMobileCarousel  />
         </div>
    </section>
  )
}

export default Testimonial