import React from 'react'
import {useNavigate} from 'react-router-dom'



function Contact() {
  let navigate = useNavigate();
  
  function handleClick(){
    navigate('/')
  }

	return (
		<div>
			<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0"  title="map" style = {{frameBorder:"0", marginHeight:"0", marginWidth:"0", filter: 'grayscale(1)', filter: 'contrast(1.2)', filter: 'opacity(0.4)'}}  scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=41.0983779,29.002356&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADRES</h2>
          <p className="mt-1">Aytekin Sk. No:29, 34418 Kâğıthane/İstanbul</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">E-POSTA</h2>
          <a className="text-indigo-500 leading-relaxed hover:text-deep-purple-accent-400"
          href="mailto:servis@onemlioto.com"
          aria-label="Our email"
          title="Our email"
          
        >
          servis@onemlioto.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TELEFON</h2>
          <p className="leading-relaxed">0532 688 93 35</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">İletişim</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Araçlarınız ile ilgili tüm sorunları bize iletebilirsiniz. En kısa sürede size ulaşacağız.</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">İsim</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">E-Posta</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mesaj</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      onClick= {handleClick}>Gönder</button>
      <p className="text-xs text-gray-500 mt-3">En kısa sürede geri dönüş yapacağız.</p>
    </div>
  </div>
</section>
		</div>
	)
}

export default Contact