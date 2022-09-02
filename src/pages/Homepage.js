import React from 'react'

import Carousel from '../components/Carousel'
import AboutUsSection from '../components/AboutUsSection'
import SectionsCards from '../components/SectionsCards'
import ServicesCards from '../components/ServicesCards'
import Pictures from '../components/Pictures'


function Homepage () {
	return (
	<div>
		{/* <Carousel/>	 */}
		<AboutUsSection/>	
		<SectionsCards/>	
		<ServicesCards/>	
		<Pictures/>	
	</div> 
	
	)
}

export default Homepage