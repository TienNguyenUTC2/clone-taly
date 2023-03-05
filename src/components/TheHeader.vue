<template lang="">
  <nav class="bg-white shadow-sm sticky w-full z-10 top-0">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="isShowMenu = !isShowMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://file.hstatic.net/1000185342/file/logo_tbag_chuan_e0e6d9427a5f4e32b61668dd34b671ce.png"
              alt="Your Company"
            />
            <router-link to="/">
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://file.hstatic.net/1000185342/file/logo_tbag_chuan_e0e6d9427a5f4e32b61668dd34b671ce.png"
                alt="Your Company"
              />
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="/"
                class="hover:text-[#ff6310] px-3 py-2 text-base font-normal"
                aria-current="page"
                >Trang chủ</a
              >

              <a
                href="#"
                class="hover:text-[#ff6310] px-3 py-2 text-base font-normal"
                >Tất cả sản phẩm</a
              >

              <a
                href="#"
                class="hover:text-[#ff6310] px-3 py-2 rounded-md text-base font-normal"
                >Cửa hàng</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div
            class="items-center hidden w-[400px] max-w-xs bg-white rounded-md shadow mr-8 lg:flex"
          >
            <input
              class="w-full py-3 pl-4 text-sm bg-transparent outline-none"
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
            /><svg
              class="h-5 px-4 ml-auto text-gray-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#000"
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              ></path>
            </svg>
          </div>

          <button type="button" class="relative p-2 text-black rounded-full">
            <div
              class="absolute top-0 right-0 z-10 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-full"
            >
              3
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              ></path>
            </svg>
          </button>
          <button
            @click="isShowModel = !isShowModel"
            type="button"
            class="relative p-2 text-black rounded-full"
          >
            <div
              class="absolute top-0 right-0 z-10 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-full"
            >
              <!-- {{ cartList.length }} -->0
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              ></path>
            </svg>
          </button>
          <!-- modeal -->
          <teleport to="body">
            <AppModelCart
              :handleCloseModelCart="handleCloseModelCart"
              :isOpen="isShowModel"
              v-if="isShowModel"
              :cartList="cartList"
              @handle-delete-cart="handleDeleteCart"
              @handle-up-or-down-amount-cart="handleUpOrDownAmount"
            >
              <!-- <CartList
                :cartList="cartList"
                @handle-delete-cart="handleDeleteCart"
                @handle-up-or-down-amount-cart="handleUpOrDownAmount"
              /> -->
            </AppModelCart>
          </teleport>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                @click="isShowProfile = !isShowProfile"
                type="button"
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/271835946_1105675083518193_1367639955070309525_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wfGPUia8K30AX-2weoG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfA-ZG69dn0Wf6akTQ6xIkWBsR-jQOy-Qxz-eXWWbzbmeQ&oe=64062F6F"
                  alt=""
                />
              </button>
            </div>

            <div
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              v-if="isShowProfile"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      class="sm:hidden shadow-md"
      id="headlessui-disclosure-panel-:rb:"
      v-if="isShowMenu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          class="text-black hover:text-[#ff6310] block px-3 py-2 rounded-md text-base font-medium"
          data-headlessui-state="open"
          >Trang chủ</a
        >
        <hr />
        <a
          href="#"
          class="text-black hover:text-[#ff6310] block px-3 py-2 rounded-md text-base font-medium"
          data-headlessui-state="open"
          >Tất cả sản phẩm</a
        >
        <hr />
        <a
          href="#"
          class="text-black hover:text-[#ff6310] block px-3 py-2 rounded-md text-base font-medium"
          data-headlessui-state="open"
          >Cửa hàng</a
        >
      </div>
    </div>
  </nav>
</template>
<script>
import AppModelCart from "./AppModelCart.vue";
import CartList from "./CartList.vue";
export default {
  props: {
    cartList: {
      type: Array,
    },
  },
  components: {
    AppModelCart,
    CartList,
  },
  data() {
    return {
      isShowProfile: false,
      isShowMenu: false,
      isShowModel: false,
    };
  },

  methods: {
    handleCloseModelCart() {
      this.isShowModel = false;
    },

    handleDeleteCart(cart) {
      this.$emit("handle-delete-cart", cart);
    },
    handleUpOrDownAmount(params) {
      this.$emit("handle-up-or-down-amount-cart", params);
    },
  },
};
</script>
<style lang=""></style>
