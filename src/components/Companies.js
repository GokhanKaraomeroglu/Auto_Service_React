import React from "react";

function Companies() {
  return (
    <div class="py-8 bg-gray-100">
      <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div class="m-auto text-center lg:w-10/12">
          <h2 class="text-2xl text-gray-700 font-bold md:text-4xl">
            En iyi sigorta şirketleri ile çalışıyoruz.
          </h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div class="p-4">
            <img src="images/clients/airbnb.svg" class="" alt="" />
          </div>
          <div class="p-4">
            <img
              src="https://musterihizmeti.net/wp-content/uploads/2020/05/axa-sigorta-iletisim-780x470.jpg"
              class="w-32 "
              alt="AXA Sigorta"
            />
          </div>
          <div class="p-4">
            <img
              src="https://www.allianz.com.tr/content/dam/onemarketing/system/AZ_Logo_Twitter_438x220px.png"
              class="w-32 "
              alt="Allianz Sigorta"
            />
          </div>
          <div class="p-4">
            <img
              src="https://hdisigorta.b-cdn.net/assetv2/img/hdi-logo.jpg"
              class="w-24"
              alt="HDI Sigorta"
            />
          </div>
          <div class="p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Anadolu_Sigorta_logo.svg/1200px-Anadolu_Sigorta_logo.svg.png"
              class="w-32"
              alt="Anadolu Sigorta"
            />
          </div>
          <div class="p-4">
            <img
              src="https://www.aksigorta.com.tr/api/uploads/20190201172831648.png"
              class="w-32 "
              alt="Ak Sigorta"
            />
          </div>
          <div class="p-4">
            <img
              src="https://www.mapfre.com.tr/sigorta-tr/media/MAPFRE_Sigorta_cmyk_250_1.png"
              class="w-32"
              alt="Mapfre Sigorta"
            />
          </div>
          <div class="p-4">
            <img
              src="https://www.groupama.com.tr/assets/img/logo.svg"
              class="w-20"
              alt="Grupama Sigorta"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
