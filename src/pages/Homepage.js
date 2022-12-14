import React from 'react'

// import Carousel from '../components/Carousel'
import Slider from '../components/Slider'
import AboutUsSection from '../components/AboutUsSection'
import SectionsCards from '../components/SectionsCards'
import ServicesCards from '../components/ServicesCards'
import Pictures from '../components/Pictures'
import Testimonial from '../components/Testimonial'


function Homepage () {
	return (
	<div>
		{/* <Carousel/> */}
		<Slider/>
		<AboutUsSection/>	
		<SectionsCards/>	
		<ServicesCards/>
		<Testimonial/>	
		<Pictures/>	
	</div> 
	
	)
}

export default Homepage