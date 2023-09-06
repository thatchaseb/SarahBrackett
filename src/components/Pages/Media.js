import React, {Suspense} from 'react';
import { Element } from 'react-scroll'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { galleryPhotos } from '../../edits';


const Media = () => {

	const renderedPhotos = galleryPhotos.map((item, index) => {

    return (
      <React.Fragment key={index}>
				<div class="">
					<a href={item.big} target="_blank" rel="noreferrer" class="lg:w-[450px] md:w-[300px] w-[250px] lg:h-[450px] md:h-[300px] h-[250px]">
						<Suspense>
							<div className='flex justify-center'>
								<img src={item.small} alt="Gallery" className="p-2 object-contain"/>
							</div>
						</Suspense>
					</a>
				</div>
      </React.Fragment>
    );
  });


  return (
	<Element 
		name="media" 
		class="
			py-12 lg:pt-20 xl:pt-32
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
			
			<Carousel  autoPlay="true" centerMode="true" dynamicHeight="true" transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" height="60px" infiniteLoop="true" >
				{renderedPhotos}
			</Carousel>
		</div>
	</Element>
   
  );
};

export default Media;