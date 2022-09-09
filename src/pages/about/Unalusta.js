import React from 'react'
// import AboutUsSection from '../../components/AboutUsSection'
import UnalUstaPic from "../../assets/UnalUsta.jpg"

function Unalusta() {
	return (
		<div>
			<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img 
		className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
		alt="hero" 
		src={UnalUstaPic}
		/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ünal Usta</h1>
      <p className="mb-8 leading-relaxed">Önemli Oto Servisi'nin kurucusu ve değerlerimizin öğreticisi Ünal Önemli, 20 Ekim 1945 tarihinde Ankara'da dünyaya gelmiştir. Küçük yaşlardan itibaren oto servislerinde çalışan Ünal Usta, Önemli Oto Servisi'ni ilk olarak sanayi mahallesinde küçük bir apartman altı atölyede kurmuş, daha sonra 1987 yılında bugünkü iş yerine taşımıştır.  
			</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Daha Fazla</button>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
		</div>
	)
}

export default Unalusta