import React from 'react';
import { Element } from 'react-scroll'
import { Swiper, SwiperSlide } from 'swiper/react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { galleryPhotos } from '../../edits';
import 'swiper/css';

const Media = () => {

	const renderedPhotos = galleryPhotos.map((item, index) => {

    return (
      <React.Fragment key={index}>
				<SwiperSlide>
					<a href={item.big} target="_blank" rel="noreferrer" class="select-none lg:w-[350px] md:w-[300px] w-[250px] lg:h-[350px] md:h-[300px] h-[250px]">
							<div className='flex justify-center'>
								<img srcSet={item.small} src={item.small} alt="Gallery" className="p-2 aspect-square object-cover w-full"/>
							</div>
					</a>
				</SwiperSlide>
      </React.Fragment>
    );
  });


  return (
	<Element 
		name="media" 
		class="
			py-12 lg:pt-20 xl:pt-32 mt-24
	">
		<div 
			className="
				font-Merriweather 
				text-[4rem] lg:text-[5rem]
				mx-20 md:mx-32 lg:mx-48 xl:mx-64 
				mb-12 
				mt-16 
				text-navy
			"
		>
			Gallery
		</div>
		<div className="">
			<Swiper
				spaceBetween={50}
				slidesPerView={1.3}
				centeredSlides={true}
				navigation={true}
				lazy={true}
				loop={true}
				breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
				speed={1000}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{renderedPhotos}
			</Swiper>
			
			{/* <Carousel  autoPlay="true" showThumbs={false} centerMode="true" dynamicHeight="true" transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" height="60px" infiniteLoop="true" >
				{renderedPhotos}
			</Carousel> */}
		</div>
	</Element>
   
  );
};

export default Media;