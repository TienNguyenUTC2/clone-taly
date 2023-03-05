<template lang="">
  <div class="flex items-center justify-center bg-white">
    <div class="p-2">
      <div class="bg-white rounded-lg shadow hover:shadow-md">
        <div
          class="relative z-[1] max-w-[300px] max-h-[300px] overflow-hidden rounded-t cursor-pointer group"
        >
          <router-link to="/product">
            <img
              :src="product.image"
              alt=""
              class="object-cover w-full h-full group-hover:scale-105"
            />
          </router-link>
          <span
            class="absolute z-10 invisible w-8 transition-all opacity-0 cursor-pointer right-5 top-5 group-hover:opacity-100 group-hover:visible"
          >
            <svg
              width="42"
              height="38"
              viewBox="0 0 42 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="max-w-full"
            >
              <path
                d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
                fill="#fff"
              />
            </svg>
          </span>
          <button
            @click.stop="handleBuy(product)"
            class="absolute flex items-center justify-center invisible px-4 py-4 text-sm font-medium text-black transition-all bg-white rounded-lg opacity-0 bottom-4 -translate-x-2/4 left-2/4 group-hover:opacity-100 group-hover:visible hover:bg-black hover:text-white"
          >
            Add to cart
          </button>
        </div>

        <div class="px-2 pt-3 text-start">
          <div>
            <p class="text-base font-normal">{{ product.description }}</p>
          </div>

          <div class="pt-1 pb-2">
            <div class="text-base font-semibold text-red-400">
              {{ product.price }} đ
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    handleBuy(product) {
      // console.log("product: ", product);
      this.$emit("handle-buy", product);
    },
  },
};
</script>
<style lang=""></style>
