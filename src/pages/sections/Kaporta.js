import React from 'react'
import KaportaPic from "../../assets/Kaporta.jpg"
import KaportaPic2 from "../../assets/Kaporta2.jpg"

function Kaporta() {
	return (
		<div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-3 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Kaporta Bakım ve Onarımı <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Sağlıklı bir kaporta aracınızı güvenli ve tasarruflu yapar. Profesyonel ekibimiz ile aracınızın motor bakım ve onarımlarını orjinal yedek parça kullanarak uygun fiyata yapmaktayız.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Motor"
              src={KaportaPic}
            />
          </div>
        </div>
      {/* </section>
			<section class="text-gray-600 body-font"> */}
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={KaportaPic2}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Motor Bakımı {' '}
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">Düzenli motor bakımı yapılan araçların uzun yıllar boyunca en az performans kaybı ile çalıştıklarını biliyor muydunuz? </p>
      <p class="mb-8 leading-relaxed">Motor bakımı aracınızın kullanım ömrünü uzatır.</p>
      <p class="mb-8 leading-relaxed">Araç motorlarının performansaları belirli aralıklar kontrol edilmelidir.</p>
      {/* <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
    </div>
  </div>
</section>
    </div>
	)
}

export default Kaporta