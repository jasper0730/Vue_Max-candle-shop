<template>
  <div class="pb-3 container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <h3 class="text-center mb-3">熱銷商品</h3>
    <div>
      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="item in products" :key="item.id">
          <div
            class="
              card
              border-0
              position-relative position-relative
              text-center
            "
          >
            <img
              :src="item.imageUrl"
              class="card-img-top rounded-0 object-fit"
              alt="..."
              style="
                height: 200px;
                object-position: center right;
              "
            />
            <a href="#" class="text-dark"></a>
            <div class="card-body p-0 bg-light">
              <h4 class="mb-1 mt-3 fs-5">
                <a href="#" class="text-decoration-none text-dark">{{
                  item.title
                }}</a>
              </h4>
              <p class="card-text mb-3 text-danger">
                NT$ {{ item.price }}
                <span class="text-muted"
                  ><del>NT$ {{ item.origin_price }}</del></span
                >
              </p>
              <button
                type="button"
                class="btn-outline-dark btn btn-sm rounded mb-3"
                @click.prevent="addToCart(item.id)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

// Import Swiper styles
import "swiper/swiper.scss";

import mitt from "@/methods/mitt";

export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
      });
    },
    addToCart(id, qty = 1) {
      // qty設定預設值,若無帶入其他值則qty為一
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.$http
        .post(url, data)
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, "加入購物車");
          mitt.emit("get-cart");
          this.$refs.productModal.hideModal();
        })
        .catch((err) => {
          this.$httpMessageState(err.response, "加入購物車");
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>