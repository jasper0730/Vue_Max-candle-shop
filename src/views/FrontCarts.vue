<template>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="pt-3 pb-5">
      <h3 class="mt-3 mb-4 fw-bold">購物車</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th width="40%" class="border-0 ps-0">品項</th>
                <th width="25%" class="border-0">數量</th>
                <th width="20%" class="border-0">金額</th>
                <th width="15%" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-bottom border-top"
                v-for="item in cartData.carts"
                :key="item.id"
              >
                <td class="border-0 px-0 py-4">

                  <div class="row d-flex align-items-center">
                    <div class="col-md-5">
                      <img
                        :src="item.product.imageUrl"
                        alt="產品圖片"
                        style="width: 72px; height: 72px"
                        class="d-none d-md-block object-fit"
                      />
                    </div>
                    <div class="col-md-7">
                      <p class="">
                        {{ item.product.title }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="d-flex flex-nowrap align-items-center">
                    <button
                      type="button"
                      class="btn btn-outline-dark border-0 btn-sm rounded me-1"
                      @click="handleSub(item)"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    {{ item.qty }}
                    <button
                      type="button"
                      class="btn btn-outline-dark border-0 btn-sm rounded ms-1"
                      @click="handlePlus(item)"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">
                    NT$ {{ $filters.currency(item.total) }}
                  </p>
                </td>
                <td class="border-0 align-middle">
                  <button
                    type="button"
                    class="btn btn-outline-dark border-0 py-2 rounded"
                    @click.prevent="deleteSingle(item.id)"
                  >
                    <i class="bi bi-x-lg"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="my-5 text-center fs-5" v-if="!cartData.carts.length">
            目前沒有商品，請加入購物車，謝謝您
          </p>
          <div class="input-group w-100 mb-3">
            <input
              type="text"
              class="form-control rounded shadow-none bg-light"
              placeholder="Coupon Code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="coupon_code"
              :disabled="
                cartData.final_total !== cartData.total ||
                !cartData.carts.length
              "
            />
            <div class="input-group-append">
              <button
                class="btn btn-dark rounded"
                type="button"
                id="button-addon2"
                @click.prevent="addCoupon"
                :disabled="
                  useCoupon ||
                  !coupon_code ||
                  cartData.final_total !== cartData.total ||
                  !cartData.carts.length
                "
              >
                <span
                  v-if="useCoupon || cartData.final_total !== cartData.total"
                  >已套用優惠券</span
                >
                <span v-else>套用優惠券</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂購明細</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    費用
                  </th>
                  <td class="text-end border-0 px-0 pt-4">
                    NT$ {{ $filters.currency(cartData.total) }}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    折扣
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">
                    {{
                      $filters.currency(cartData.final_total - cartData.total)
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總金額</p>
              <p class="mb-0 h4 fw-bold">
                NT$ {{ $filters.currency(Math.round(cartData.final_total)) }}
              </p>
            </div>
            <router-link to="/check"
              ><button
                type="button"
                class="btn btn-dark w-100 mt-4 rounded"
                :disabled="!cartData.carts.length"
              >
                結帳
              </button>
            </router-link>
            <router-link to="/products"
              ><button type="button" class="btn btn-dark w-100 mt-2 rounded">
                繼續購物
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mitt from "@/methods/mitt";
export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
      isLoading: false,
      qty: 1,
      coupon_code: "helloworld520",
      useCoupon: false,
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
          mitt.emit("get-cart");
          this.cartData = res.data.data;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "購物車");
        });
    },
    deleteSingle(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false;
          this.getCart();
          this.$httpMessageState(res, "移除");
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "移除");
        });
    },
    handleSub(item) {
      if (item.qty > 1) {
        this.isLoading = true;
        this.qty = item.qty - 1;
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
        const data = {
          data: {
            product_id: item.id,
            qty: this.qty,
          },
        };
        this.$http
          .put(url, data)
          .then(() => {
            this.isLoading = false;
            this.getCart();
          })
          .catch((err) => {
            this.isLoading = false;
            this.$httpMessageState(err.response);
          });
      } else {
        this.deleteSingle(item.id);
      }
    },
    handlePlus(item) {
      if (item.qty > 0) {
        this.isLoading = true;
        this.qty = item.qty + 1;
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
        const data = {
          data: {
            product_id: item.id,
            qty: this.qty,
          },
        };
        this.$http
          .put(url, data)
          .then(() => {
            this.isLoading = false;
            this.getCart();
          })
          .catch((err) => {
            this.isLoading = false;
            this.$httpMessageState(err.response);
          });
      }
    },
    addCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        data: {
          code: this.coupon_code,
        },
      };
      this.$http
        .post(url, coupon)
        .then((res) => {
          this.isLoading = false;
          this.useCoupon = res.data.success;
          this.getCart();
          this.$httpMessageState(res, "套用優惠券");
          this.coupon_code = "";
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "套用優惠券");
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>