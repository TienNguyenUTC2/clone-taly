<template lang="">
  <!-- <div v-if="cartList.lenght === 0">
    <img
      src="https://bizweb.sapocdn.net/100/419/232/themes/809377/assets/empty-cart.png?1662538039841"
      alt=""
      class="h-[200px] mx-auto"
    />
    <p class="mt-4 text-lg text-center">
      Giỏ hàng của bạn đang trống. Mời bạn mua thêm sản phẩm
      <Link to="/" class="text-lg uppercase text-[#ff6310] font-semibold">
        &nbsp;tại đây !
      </Link>
    </p>
  </div> -->
  <div
    class="flex items-center px-6 py-5 border-t border-solid border-[#e5e5e5]"
    v-for="cart in cartList"
    :key="cart.id"
  >
    <div class="flex w-2/5">
      <div class="w-20">
        <img :src="cart.image" alt="" class="w-[100px] h-[80px]" />
      </div>
      <div class="flex flex-col justify-between flex-grow ml-4">
        <span class="text-base font-medium leading-5">{{
          cart.description
        }}</span>
        <span class="text-sm text-red-500">Xanh/S</span>
        <button
          @click="handleDeleteCart(cart)"
          class="text-sm font-medium text-left underline hover:text-red-400"
        >
          Xóa
        </button>
      </div>
    </div>
    <div class="flex justify-center w-1/5">
      <input
        @click="handleUpOrDownAmount(false, cart)"
        type="button"
        value="-"
        :disabled="cart.amount === 1"
        class="flex bg-white float-left border border-solid border-[#e1e1e1] h-[33px] w-[33px] text-center text-xl text-black justify-center items-center ${ cursor-pointer"
      />
      <input
        type="text"
        :value="cart.amount"
        readOnly
        class="flex bg-white float-left border border-solid border-[#e1e1e1] border-l-0 h-[33px] w-[33px] text-center text-base text-black justify-center items-center"
      />
      <input
        @click="handleUpOrDownAmount(true, cart)"
        type="button"
        value="+"
        class="flex bg-white float-left border border-solid border-[#e1e1e1] border-l-0 h-[33px] w-[33px] text-center text-xl cursor-pointer text-black justify-center items-center"
      />
    </div>
    <span class="w-1/5 text-sm font-medium text-center">
      {{
        cart.price.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })
      }}
    </span>
    <span class="w-1/5 text-sm font-medium text-center">
      {{
        (cart.amount * cart.price).toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })
      }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    cartList: {
      type: Array,
    },
  },

  methods: {
    handleDeleteCart(cart) {
      this.$emit("handle-delete-cart", cart);
    },
    handleUpOrDownAmount(status, cart) {
      this.$emit("handle-up-or-down-amount-cart", { status, cart });
    },
  },
};
</script>
<style lang=""></style>
