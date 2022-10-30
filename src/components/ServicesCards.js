import React from 'react'

function ServicesCards() {
	return (
		<section className="text-gray-600 body-font">
  <div className="container px-2 py-12 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Hizmetlerimiz</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"> <span className="text-indigo-500 title-font">Önemli Oto Servisi</span> uzman kadrosu ve yarım asırlık tecrübesi ile araç bakım, onarım, kaza sonrası işlemler ve sigorta konularında müşterilerine hizmet vermektedir.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://picsum.photos/id/183/400/300" alt="Periyodik Bakım"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Periyodik Bakım</h2>
          <p className="leading-relaxed text-base">Araçlarınızın periyodik bakımlarını uzman kadromuz ile yapmaktayız.</p>
          <br/>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://picsum.photos/id/133/400/300" alt="Onarım"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Onarım</h2>
          <p className="leading-relaxed text-base">Araçlarınızın onarımında yüksek kaliteli yedek parçalar ve en hassas ellerden çıkan işcilik kullanılmaktadır.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://picsum.photos/id/1072/400/300" alt="Kaza Sonrası"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Kaza Sonrası İşlemler</h2>
          <p className="leading-relaxed text-base">Kaza sonrası araçlarınız emin ellerde. Siz yinede kaza yapmayın...</p>
          <br/>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://picsum.photos/id/605/400/300" alt="Sigorta"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Sigorta</h2>
          <p className="leading-relaxed text-base">Saygın tüm sigortalar ile anlaşmalı onarım hizmetimiz bulunmaktadır.</p>
          <br/>
        </div>
      </div>
    </div>
  </div>
</section>
	)
}

export default ServicesCards