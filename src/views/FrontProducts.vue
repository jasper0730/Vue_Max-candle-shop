<template>
    <div class="container py-3">
      <Loading :active="isLoading" :z-index="1060"></Loading>
      <div class="row">
        <div class="col-md-3 col-sm-4 col">
          <select
            class="form-select text-secondary bg-light rounded"
            aria-label="Default select example"
            @change="getProducts('1', this.$refs.selectItem.value)"
            ref="selectItem"
          >
            <option selected>全部</option>
            <option>淡雅</option>
            <option>適中</option>
            <option>濃郁</option>
          </select>
        </div>
      </div>
    </div>

    <div class="container pb-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 bg-light g-3">
        <div class="col" v-for="item in products" :key="item.id">
          <div
            class="
              card
              border-0
              mb-4
              position-relative position-relative
              bg-light
            "
          >
            <img
              :src="item.imageUrl"
              class="card-img-top rounded-0 w-100 object-fit"
              alt="..."
              style="height: 200px;"
            />
            <a href="#" class="text-dark">
              <i
                class="far fa-heart position-absolute"
                style="right: 16px; top: 16px"
              ></i>
            </a>
            <div class="card-body p-0 text-center">
              <h4 class="mt-3 fs-5 text-dark">
                {{ item.title }}
              </h4>
              <p class="card-text text-muted mb-0">
                <span class="badge badge-outline rounded-pill bg-secondary">{{
                  item.category
                }}</span>
              </p>
              <div v-if="item.price === item.origin_price">
                <p class="text-muted">
                  售價 NT${{ $filters.currency(item.origin_price) }}
                </p>
              </div>
              <div v-else>
                <p class="text-muted mb-0">
                  <del>原價 NT${{ $filters.currency(item.origin_price) }}</del>
                </p>
                <p class="text-danger">
                  優惠價 NT${{ $filters.currency(item.price) }}
                </p>
              </div>
              <button
                type="button"
                class="btn btn-sm btn-outline-dark rounded mb-2 w-100"
                @click.prevent="getMore(item.id)"
              >
                產品介紹
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-dark rounded mb-2 w-100"
                @click.prevent="addToCart(item.id)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <Pagination @emit-pages="getProducts" :pages="pagination"></Pagination>
    </div>
    <ProductModal
      ref="productModal"
      :modal-data="product"
      @add-to-cart="addToCart"
    ></ProductModal>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import ProductModal from "@/components/ProductModal.vue";
import mitt from "@/methods/mitt";

export default {
  data() {
    return {
      products: [],
      pagination: {},
      currentPage: 1,
      isLoading: false,
      product: {},
    };
  },
  methods: {
    getProducts(page = 1, category) {
      this.isLoading = true;
      this.currentPage = page;
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      if (category) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`;
      }
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "產品列表");
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
    getMore(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product;
          this.$refs.productModal.openModal();
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "查看");
        });
    },
  },
  mounted() {
    this.getProducts();
  },
  components: {
    Pagination,
    ProductModal,
  },
};
</script>