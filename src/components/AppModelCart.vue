<template lang="">
  <div
    class="fixed inset-0 z-[999] flex items-center justify-center p-5 modal transition-all duration-500"
  >
    <div
      @click="handleCloseModelCart"
      class="absolute inset-0 bg-black bg-opacity-60 overlay"
    ></div>
    <div class="relative z-10 bg-white rounded-lg shadow-lg">
      <span
        class="absolute top-0 right-0 flex items-center justify-center w-8 h-8 p-1 bg-black rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
        @click="handleCloseModelCart"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
            fill="#fff"
          />
        </svg>
      </span>
      <div class="w-full xl:w-[1200px] lg:w-[1044px] md:w-[788px] mx-auto">
        <div class="flex">
          <div class="flex-1 p-10 bg-white">
            <div class="flex justify-between pb-3 border-b">
              <h1 class="text-2xl font-medium">Giỏ hàng:</h1>
              <h2 class="text-2xl font-medium">3 sản phẩm</h2>
            </div>
            <div class="flex mt-5 mb-5">
              <h3 class="w-2/5 text-base leading-3 font-medium text-[#ff6310]">
                Thông tin chi tiết sản phẩm
              </h3>
              <h3
                class="w-1/5 text-base leading-3 font-medium text-center text-[#ff6310]"
              >
                Số lượng
              </h3>
              <h3
                class="w-1/5 text-base leading-3 font-medium text-center text-[#ff6310]"
              >
                Giá bán
              </h3>
              <h3
                class="w-1/5 text-base leading-3 font-medium text-center text-[#ff6310]"
              >
                Tổng
              </h3>
            </div>

            <div class="w-full mx-auto h-[350px] overflow-auto scroll">
              <CartList
                :cartList="cartList"
                @handle-delete-cart="handleDeleteCart"
                @handle-up-or-down-amount-cart="handleUpOrDownAmount"
              ></CartList>
            </div>
          </div>
          <div class="w-1/4 pr-10 py-10">
            <h1 class="pb-3 text-2xl font-medium border-b">
              Thông tin đơn hàng
            </h1>
            <div class="flex justify-between mt-2">
              <span class="text-xl font-medium">Tổng tiền:</span>
              <span class="text-xl font-medium text-[#e70303]">
                {{
                  (sumMoney = sumMoney.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  }))
                }}
              </span>
            </div>
            <div class="">
              <p>
                Phí vận chuyển sẽ được tính ở trang thanh toán. <br />
                Bạn cũng có thể nhập mã giảm giá ở ở phía dưới
              </p>
            </div>
            <!-- {/* ghi chú */} -->
            <div class="">
              <label
                htmlFor="note"
                class="mb-[10px] text-black mt-2 font-semibold block"
              >
                Ghi chú đơn hàng
              </label>
              <textarea
                class="w-full px-3 py-2 resize-none outline-none border border-[#e5e5e5]"
                id="note"
                name="note"
                rows="4"
                placeholder="Ghi chú"
              ></textarea>
            </div>

            <div class="">
              <a href="#">
                <button
                  class="w-full py-3 mt-3 text-base font-medium text-white bg-black rounded"
                >
                  Thanh toán ngay
                </button>
              </a>
              <a
                href="#"
                to="/"
                class="flex items-center justify-center mt-3 text-base font-medium text-black hover:text-[#ff6310]"
              >
                Tiếp tục mua hàng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartList from "./CartList.vue";
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    cartList: {
      type: Array,
    },
    handleCloseModelCart: {
      type: Function,
    },
  },
  computed: {
    sumMoney() {
      return this.cartList.reduce(
        (sum, cart) => (sum += cart.amount * cart.price),
        0
      );
    },
  },
  components: {
    CartList,
  },
  methods: {
    handleUpOrDownAmount(params) {
      this.$emit("handle-up-or-down-amount-cart", params);
    },
    handleDeleteCart(cart) {
      this.$emit("handle-delete-cart", cart);
    },
  },
};
</script>
<style lang="css">
.scroll::-webkit-scrollbar {
  width: 3px;
}
.scroll::-webkit-scrollbar-thumb {
  background-color: #ff6310;
  border-radius: 100rem;
}
.scroll::-webkit-scrollbar-track {
  background-color: white;
}
</style>
