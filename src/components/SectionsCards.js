import React from 'react'

function SectionsCards() {
	return (
		<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Bölümler</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"> <span className="text-indigo-500 title-font">Önemli Oto Servisi</span> uzman kadrosu ve yarım asırlık tecrübesi ile araçlarınızın tüm aksamlarına ait onarımlarda müşterilerine hizmet vermektedir.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.mapfre.com.tr/blog/wp-content/uploads/2019/07/oto-servisi-bulmak-icin-oneriler.jpg" alt="Motor"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Motor</h2>
          <p className="leading-relaxed text-base">Kontrolleri yapılmış, düzgün çalışan bir motor aracınızın güvenliğini arttırır ve yakıt tasarrufu yapmanızı sağlar.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://netayotomotiv.com/download.php?file_name=mekanik-hizmetler.jpg&file_yol=o" alt="Mekanik Aksam"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mekanik Aksam</h2>
          <p className="leading-relaxed text-base">Aracınızın tekrar arızalanmaması için profesyonel kadromuza ve kullandığımız orijinal yedek parçalara güvenin.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.gucluopelservisi.com/uploads/Large/elektrik-servisi-GAxLAzFS88rb.jpg" alt="Oto Elektrik"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Oto Elektrik</h2>
          <p className="leading-relaxed text-base">Araçlarınızın elektrik donanımlarına hassas dokunuşlar.
</p>
          <br/>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="http://uludagcar.com/wp-content/uploads/2015/08/kaporta-boya-servisi-uludağ-car-araç-servisi-ankara-2.jpg" alt="Kaborta ve Boya"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Önemli Oto</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Kaborta ve Boya</h2>
          <p className="leading-relaxed text-base">Uzman kaborta ustalarımızın ellerinde aracınız her zaman güvende.</p>
          <br/>
        </div>
      </div>
    </div>
  </div>
</section>
	)
}

export default SectionsCards