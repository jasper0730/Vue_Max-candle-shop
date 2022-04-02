<template>
  <div class="sticky-top bg-light ">
    <nav class="container navbar navbar-expand-lg navbar-light">
      <a class="logo navbar-brand fs-1" href="..\views\FrontView.vue">Max</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav align-items-center">
          <router-link class="nav-item nav-link me-3" to="/brand"
            >品牌</router-link
          >
          <router-link class="nav-item nav-link me-3" to="/products"
            >香氛蠟燭</router-link
          >
          <router-link class="nav-item nav-link me-3" to="/questions"
            >常見問題</router-link
          >
          <router-link class="nav-item nav-link me-3 d-lg-none" to="/carts"
            >購物車</router-link
          >
          <router-link class="nav-item nav-link position-relative d-none d-lg-block" to="/carts"
            ><i class="bi bi-bag fs-5"
              ><span
                class="
                  position-absolute
                  top-10
                  start-90
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                  fs-8
                "
              >
                {{ cartData?.carts?.length }}
              </span></i
            ></router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import mitt from "@/methods/mitt";
export default {
  data() {
    return {
      cartData: {},
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          this.cartData = res.data.data;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "購物車");
        });
    },
  },
  mounted() {
    this.getCart();
    mitt.on('get-cart',()=>{
      this.getCart();
    })
  },
};
</script>