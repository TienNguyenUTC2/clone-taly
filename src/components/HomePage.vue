<template lang="">
  <TheHeader
    :cartList="cartList"
    @handle-delete-cart="handleDeleteCart"
    @handle-up-or-down-amount-cart="handleUpOrDownAmount"
    :productList="productList"
  />
  <div class="min-h-[62.5vh]">
    <section class="max-w-[1226px] m-auto">
      <div class="block cursor-pointer mt-7 p-4">
        <a href="/">
          <img
            src="https://theme.hstatic.net/1000185342/1000988527/14/imgtext_1_img.jpg?v=192"
            alt=""
            class="object-cover w-full"
          />
        </a>
      </div>
      <div class="block cursor-pointer mt-5 p-4">
        <a href="/">
          <img
            src="https://theme.hstatic.net/1000185342/1000988527/14/imgtext_2_img.jpg?v=192"
            alt=""
            class="object-cover w-full"
          />
        </a>
      </div>
    </section>
    <section class="mb-7">
      <div
        class="container xl:w-[1300px] lg:w-[1044px] md:w-[788px] py-[15px] relative mr-auto ml-auto"
      >
        <div class="mb-[30px] text-center">
          <h2
            class="flex justify-center mb-1 text-center lg:text-2xl md:text-xl"
          >
            <span class="font-normal text-2xl text-center uppercase">
              Sản phẩm nổi bật
            </span>
          </h2>
        </div>
        <ul class="flex flex-wrap pl-0 justify-center mb-[15px] p-0 list-none">
          <li class="mb-[10px] mr-[10px] flex">
            <a
              href="#"
              class="text-[#ff6310] text-sm border border-dashed border-[#ff6310] p-[10px] rounded-2xl uppercase"
            >
              Áo Thun
            </a>
          </li>
          <li class="mb-[10px] mr-[10px] flex">
            <a
              href="#"
              class="text-sm text-black p-[10px] rounded-2xl uppercase"
            >
              Áo Kiểu
            </a>
          </li>
          <li class="mb-[10px] mr-[10px] flex">
            <a
              href="#"
              class="text-sm text-black p-[10px] rounded-2xl uppercase"
            >
              Quần
            </a>
          </li>
        </ul>
        <div class="tap-reuslt px-10">
          <div class="block">
            <div
              class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mobile gap-[0.5px]"
            >
              <ProductItem
                v-for="product in productList"
                :key="product.id"
                :product="product"
                @handle-buy="handleBuy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <TheFooter />
</template>
<script>
// // optional style for arrows & dots
import ProductItem from "./ProductItem.vue";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
export default {
  data() {
    return {
      cartList: [],
      productList: [
        {
          id: 1,
          image:
            "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 2,
          image:
            "https://product.hstatic.net/1000185342/product/img_2697_34d892c4fe064995ba4abff42b0eed25_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 3,
          image:
            "https://product.hstatic.net/1000185342/product/z3524825081196_a9ef1d04515ff76e966264f3d9a2bbc5_ebfc9ad7bb41483d94efee8d55e65671_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 4,
          image:
            "https://product.hstatic.net/1000185342/product/z3509895198313_782b45bc7c14e25f87d891ac1bb41b39_97072a597688422c9dbaee9f85b1369a_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 5,
          image:
            "https://product.hstatic.net/1000185342/product/z3529867157593_8d918171db8cf2825ba5d25bb189a506_d980e72b60804d1e8fa36f8a5a6f3a79_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 6,
          image:
            "https://product.hstatic.net/1000185342/product/2bf549f8-7a55-4e3e-8239-dc88885bbb46_10cc50cfd5364127898ac83dc572f8a0_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 7,
          image:
            "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 8,
          image:
            "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 9,
          image:
            "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 10,
          image:
            "https://product.hstatic.net/1000185342/product/img_9070_112e958ae941417791b9e5671e90dc0b_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 11,
          image:
            "https://product.hstatic.net/1000185342/product/img_3833_2a9d728fab604ec4b5533eee5434d887_large.jpg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
        {
          id: 12,
          image:
            "https://product.hstatic.net/1000185342/product/245cebd1-5700-49e5-a4ef-2d33bc50b67d_3358d579c9ef4841900bb0c9cdf730dd_large.jpeg",
          description: "Áo trễ vai 2 tầng bèo Lili",
          price: 239000,
        },
      ],
    };
  },
  components: {
    ProductItem,
    TheHeader,
    TheFooter,
  },
  methods: {
    handleBuy(product) {
      // this.cartList.push(productItem);
      const index = this.cartList.findIndex((cart) => cart.id === product.id);
      if (index !== -1) {
        // tìm thấy product trong cartlist
        this.cartList[index].amount += 1;
      } else {
        // chưa tìm thấy product trong cartlist
        const newProduct = { ...product, amount: 1 };
        this.cartList = [...this.cartList, newProduct];
      }
      this.$emit("handle-buy", product);
    },
    handleDeleteCart(cart) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.id !== cart.id
      );
    },
    handleUpOrDownAmount(params) {
      const { status, cart } = params;
      const index = this.cartList.findIndex(
        (cartItem) => cartItem.id === cart.id
      );
      if (index !== -1) {
        if (status) {
          //tăng
          this.cartList[index].amount += 1;
        } else {
          //giảm
          this.cartList[index].amount -= 1;
          // if (this.cartList[index].amount < 1) {
          //   this.cartList = this.cartList.filter(
          //     (cartItem) => cartItem.id !== cart.id
          //   );
          // }
        }
      }
    },
  },
};
</script>
<style lang="css">
@media (max-width: 640px) {
  .mobile {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
