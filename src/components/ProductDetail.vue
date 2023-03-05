<template lang="">
  <TheHeader />
  <section class="overflow-hidden bg-white py-11 font-poppins">
    <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4 md:w-1/2">
          <div class="top-0 overflow-hidden">
            <div class="relative mb-6 lg:mb-10 lg:h-2/4">
              <img
                src="https://product.hstatic.net/1000185342/product/c0844a0d-59b6-42be-9cbe-a73ea7ac0f24_5ea22ad1db6946e7a67dcb68fa8086f8_1024x1024.jpg"
                alt=""
                class="object-cover w-full lg:h-full"
              />
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-10">
            <div class="mb-5">
              <h2 class="max-w-xl mt-2 mb-3 text-2xl font-medium text-black">
                Áo croptop Ovi - Đen
              </h2>
              <p>Mã sản phẩm: <span class="text-[#007bff]">A1051-1</span></p>
              <p class="max-w-md mt-4 text-[#000]">
                Áo croptop hai dây OVI TALY A105 - Thông số: (áo có dây kéo phía
                sau ạ)<br /><br />
                Size M : Dài không tính dây 29 ngực 70-78 dây tuỳ chỉnh<br />
                <br />
                Size S : Dài không tính dây 28 ngực 68-76 dây tùy chỉnh
              </p>
              <p class="inline-block mt-3 text-2xl font-bold text-[#DF0000]">
                <span>199.000 đ</span>
                <span
                  class="text-base font-normal text-gray-500 line-through ml-4"
                  >250.000 đ</span
                >
              </p>
            </div>
            <div class="flex items-center mb-3">
              <h2 class="w-16 mr-6 text-xl font-bold">Colors:</h2>
              <div class="flex flex-wrap -mx-2 -mb-2">
                <button
                  class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400"
                >
                  <div class="w-6 h-6 bg-cyan-300"></div>
                </button>
                <button
                  class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400"
                >
                  <div class="w-6 h-6 bg-green-300"></div>
                </button>
                <button
                  class="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400"
                >
                  <div class="w-6 h-6 bg-red-200"></div>
                </button>
              </div>
            </div>
            <div class="flex items-center my-4">
              <h2 class="w-16 text-xl font-bold">Size:</h2>
              <div class="flex flex-wrap -mx-2 -mb-2">
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300"
                >
                  S
                </button>
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300"
                >
                  M
                </button>
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300"
                >
                  L
                </button>
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300"
                >
                  XL
                </button>
              </div>
            </div>
            <div class="w-32 mb-8">
              <label for="" class="w-full text-xl font-semibold text-gray-700"
                >Quantity</label
              >
              <div
                class="relative flex flex-row w-full h-10 mt-4 bg-transparent border border-solid border-black"
              >
                <button
                  class="w-20 h-full text-black rounded-l outline-none cursor-pointer border-r border-solid border-black"
                >
                  <span class="m-auto text-2xl font-thin">-</span>
                </button>
                <input
                  type="text"
                  class="flex items-center w-full font-semibold text-center text-black outline-none focus:outline-none text-md hover:text-black"
                  value="1"
                  readOnly
                />
                <button
                  class="w-20 h-full text-black rounded-r outline-none cursor-pointer border-l border-solid border-black"
                >
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <div class="flex flex-wrap items-center -mx-4">
              <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                <button
                  class="flex transition-all items-center justify-center w-full p-4 border border-black rounded-md hover:bg-black hover:text-white uppercase bg-white text-black"
                >
                  Thêm vào giỏ
                </button>
              </div>
              <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                <button
                  class="flex transition-all items-center justify-center w-full p-4 border border-black rounded-md hover:bg-black hover:text-white uppercase bg-white text-black"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <TheFooter />
</template>
<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
export default {
  components: {
    TheFooter,
    TheHeader,
  },
};
</script>
<style lang=""></style>
