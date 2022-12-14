import React from "react";

function Pictures() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-2 py-12 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Önemli Oto Servisi'den Fotoğraflar
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            <em> Önemli Oto Servisi</em>'nin özenli, titiz ve becerikli ustaları,
            profesyonel bakış açılarıyla araçalrınıza mucizevi dokunuşlar
            yapmaktadırlar. Her anları tecrübe ve yeteneklerini biraz daha
            ortaya çıkarmaktadır.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://picsum.photos/id/1072/400/300"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://picsum.photos/id/133/400/300"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://picsum.photos/id/655/400/300"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://picsum.photos/id/514/400/300"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://picsum.photos/id/111/400/300"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://picsum.photos/id/183/400/300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pictures;
