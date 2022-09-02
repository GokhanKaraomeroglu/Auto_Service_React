import React from "react";

function AboutUsSection() {
  return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-2 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="Hakkımızda"
              src="https://picsum.photos/id/1072/600/400"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hakkımızda
              {/* <br className="hidden lg:inline-block"/> */}
            </h1>
            <p className="mb-8 leading-relaxed">
              Rahmetli babamız <strong>Ünal Önemli</strong>'nin bize bıraktığı
              değerleri koruyup geliştirerek bu günlere gelen{" "}
              <strong>Önemli Oto Servisi</strong>'nin temel düşüncesi tüm
              müşterilerine en kaliteli hizmeti en uygun fiyatla sunmaktır.{" "}
            </p>
            <p>
              {" "}
              <strong>Önemli Oto Servisi</strong>'nin miras aldığı en büyük
              değer müşteri memnuniyetidir. Araçlarınızın onarımında yüksek
              kaliteli yedek parçalar ve en hassas ellerden çıkan işcilik
              kullanılmaktaır.
            </p>
            <br />
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Ünal Usta
              </button>
              <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Hakkımızda
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutUsSection;
