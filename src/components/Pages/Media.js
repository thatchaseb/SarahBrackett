import React, {Suspense} from 'react';
import { Element } from 'react-scroll'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
<<<<<<< Updated upstream
=======
import { useMediaQuery } from 'react-responsive';

>>>>>>> Stashed changes
import { galleryPhotos } from '../../edits';


const Media = () => {

	const renderedPhotos = galleryPhotos.map((item, index) => {
<<<<<<< Updated upstream

    return (
      <React.Fragment key={index}>
				<div class="">
					<a href={item.big} target="_blank" rel="noreferrer" class="lg:w-[350px] md:w-[300px] w-[250px] lg:h-[350px] md:h-[300px] h-[250px]">
						<Suspense>
							<div className='flex justify-center'>
								<img src={item.small} alt="Gallery" className="p-2 object-contain max-w-[450px] max-h-[450px] lg:w-[450px] md:w-[300px] w-[250px] lg:h-[450px] md:h-[300px] h-[250px]"/>
							</div>
						</Suspense>
					</a>
				</div>
=======
    return (
      <React.Fragment key={index}>
        <div className="m-8 sm:h-[500px] sm:w-[500px] h-[300px] w-[300px]">
					<a href={item.big} target="_blank" rel="noreferrer">
					<Suspense>
						<div className='flex justify-center'>
							<img src={item.small} alt="Headshot" className="bg-gradient-to-tr from-white to-gray-100 p-2 sm:h-[500px] sm:w-[500px] h-[300px] w-[300px] object-cover"/>
			    	
						</div>
						</Suspense>
					</a>
        </div>
>>>>>>> Stashed changes
      </React.Fragment>
    );
  });

<<<<<<< Updated upstream

  return (
=======
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

	return (
>>>>>>> Stashed changes
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
			
<<<<<<< Updated upstream
			<Carousel  autoPlay="true" showThumbs={false} centerMode="true" dynamicHeight="true" transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" height="60px" infiniteLoop="true" >
				{renderedPhotos}
=======
		<Carousel dynamicHeight={true}  autoPlay="true" centerMode={!isMobile} transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" infiniteLoop="true" >
				
				{renderedPhotos}	
>>>>>>> Stashed changes
			</Carousel>
		</div>
	</Element>
   
  );
};

export default Media;