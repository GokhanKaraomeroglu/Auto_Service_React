import React from 'react'
import TestiPic from "../assets/Testi.jpg"
import TestiPic2 from "../assets/Testi2.jpg"
import TestiPic3 from "../assets/Testi3.jpg"

function Testimonial() {
	return (
	<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
	<h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Müşterilerimizden</h1>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={TestiPic}/>
          <p className="leading-relaxed"> Aracımla kendi araçları gibi ilgilenen Önemli Oto ve Fatih beye teşekkürlerimi sunarım.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Ahmet Bayrak</h2>
          <p className="text-gray-500">Mercedes B200</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={TestiPic2}/>
          <p className="leading-relaxed">Aracımla kendi araçları gibi ilgilenen Önemli Oto ve Fatih beye teşekkürlerimi sunarım.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Alper Kamu</h2>
          <p className="text-gray-500">Ford Kuga</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={TestiPic3}/>
          <p className="leading-relaxed">Aracımla kendi araçları gibi ilgilenen Önemli Oto ve Fatih beye teşekkürlerimi sunarım.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Hasan Demirdağ</h2>
          <p className="text-gray-500">Honda Civic</p>
        </div>
      </div>
    </div>
  </div>
</section>
	)
}

export default Testimonial