import React from 'react';
import { Element } from 'react-scroll'

<<<<<<< Updated upstream
import { Bio } from '../../edits';

import bioPic from "../media/BioPicture.jpg"
=======

import aboutPic from "../media/aboutPicture.jpg"
import { SocialLinks, Bio } from '../../edits';
>>>>>>> Stashed changes


const About = () => {
	return (
	<Element name="about" 
		className="
			mx-20 md:mx-32 lg:mx-48 xl:mx-64
			bg-no-repeat 
			bg-cover 
			relative 
			sm:bg-[left_top_-2rem] bg-[left_top_0rem]
		"
	>
		<div 
			className="
				flex 
				justify-between 
				my-8
			" 
		>
			<div class="font-Merriweather text-[4rem] mt-8 text-navy">
				About Sarah
			</div>
		</div>
			<div 
			className='	
				p-3
				text-xl
				text-navy
				text-justify 
				border-solid rounded
				bg-[#FFFFFFAF]
			'>
			
<<<<<<< Updated upstream
				<img src={bioPic} alt="Sara aluring" className="sm:float-left mr-8 border-solid border-navy  object-top object-cover w-72 overflow-hidden"/>
=======
				<img src={aboutPic} alt="Sara aluring" className="sm:float-left mr-8 border-solid border-navy  object-top object-cover w-72 overflow-hidden"/>
>>>>>>> Stashed changes
			
				<span className="font-bold text-2xl">Sarah Brackett</span> {Bio}
			</div>
	
		
	</Element>
	);
};

export default About;