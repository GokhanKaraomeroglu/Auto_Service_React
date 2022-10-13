import React from "react";

function Record() {
  return (
    <div>
      <div className="py-4 bg-white dark:bg-gray-900 flex justify-center">
        <p className="text-2xl font-bold">Müşteri Kayıtları</p>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" className="sr-only">
            Ara
          </label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Araç veya Müşteri Ara"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Araç
              </th>
              <th scope="col" className="py-3 px-6">
                Renk
              </th>
              <th scope="col" className="py-3 px-6">
                Plaka
              </th>
              <th scope="col" className="py-3 px-6">
                Sahibi
              </th>
              <th scope="col" className="py-3 px-6">
                Tarih
              </th>
              <th scope="col" className="py-3 px-6">
                İşlem
              </th>
              <th scope="col" className="py-3 px-6">
                Fiyat
              </th>
              <th scope="col" className="py-3 px-6">
                Faaliyet
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">Gümüş</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">İyi</td>
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">$2999</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$1999</td>
              <td className="py-4 px-6">1.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$99</td>
              <td className="py-4 px-6">0.2 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Watches</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$199</td>
              <td className="py-4 px-6">0.12 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iMac
              </th>
              <td className="py-4 px-6">Silver</td>
              <td className="py-4 px-6">PC</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">7.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple AirPods
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$399</td>
              <td className="py-4 px-6">38 g</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad Pro
              </th>
              <td className="py-4 px-6">Gold</td>
              <td className="py-4 px-6">Tablet</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$699</td>
              <td className="py-4 px-6">1.3 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Keyboard
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$99</td>
              <td className="py-4 px-6">453 g</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple TV 4K
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">TV</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$179</td>
              <td className="py-4 px-6">1.78 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AirTag
              </th>
              <td className="py-4 px-6">Silver</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$29</td>
              <td className="py-4 px-6">53 g</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Düzenle
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Sil
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Record;
