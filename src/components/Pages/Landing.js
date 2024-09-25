import React from 'react'
import coverPic from '../media/Cover.jpg'
import { Element } from 'react-scroll'

const Landing = () => {
  return (
    <div class="bg-[#181F3C] ">

    <Element name="home" class="text-white max-w-[90rem] ml-auto">
      <div class="pt-16 select-none">
        <div class="xl:left-[10rem] lg:top-[45%] lg:text-[5rem] md:top-[45%] md:text-[3.5rem] sm:top-[40%] sm:text-[3rem] top-[30%] left-[4rem] text-[2rem] absolute">Sarah Brackett</div>
        <div class="xl:left-[10rem] lg:top-[58%] lg:text-[3rem] md:top-[55%] md:text-[2.5rem] sm:top-[48%] sm:text-[2rem] top-[37%] left-[4rem] text-[1rem] absolute">Actor - Singer - Musician</div>
        <div class="relative">

      <div class="absolute inset-0 bg-gradient-to-r from-[#181F3C] from-2%"></div>
        <img src={coverPic} alt="cover" class="object-cover object-top w-full max-h-[50rem]" />
        </div>
      </div>

    </Element>
    </div>

  );
};

export default Landing;

