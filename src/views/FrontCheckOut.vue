<template>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="mt-3 pb-5">
      <h3 class="mt-3 mb-4">訂購資訊</h3>
      <div class="row">
        <div class="col-md-8">
          <div class="justify-content-center">
            <Form
              class="g-3"
              @submit="createOrder"
              ref="form"
              v-slot="{ errors }"
            >
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <Field
                  type="text"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  id="email"
                  placeholder="請輸入Email"
                  rules="email|required"
                  v-model="form.user.email"
                />
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">訂購人姓名</label>
                <Field
                  type="text"
                  name="姓名"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  id="name"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                />
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div>
                <div class="mb-3">
                  <label for="tel" class="form-label">訂購人電話</label>
                  <Field
                    class="form-control"
                    type="text"
                    name="電話"
                    :class="{ 'is-invalid': errors['電話'] }"
                    id="tel"
                    placeholder="請輸入電話"
                    :rules="isPhone"
                    v-model="form.user.tel"
                  />
                  <ErrorMessage
                    name="電話"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">訂購人地址</label>
                  <Field
                    class="form-control"
                    :class="{ 'is-invalid': errors['地址'] }"
                    type="text"
                    name="地址"
                    id="address"
                    placeholder="請輸入地址"
                    rules="required"
                    v-model="form.user.address"
                  />
                  <ErrorMessage
                    name="地址"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">備註</label>
                  <textarea
                    class="form-control"
                    type="text"
                    id="message"
                    cols="30"
                    rows="3"
                    v-model="form.message"
                  >
                  </textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="rounded btn btn-dark mb-3">
                    訂單送出
                  </button>
                </div>
              </div>
            </Form>
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
                    NT {{ $filters.currency(cartData.total) }}
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
            <router-link to="/carts"
              ><button
              type="button"
                class="btn btn-dark w-100 mt-4 rounded"
              >
                回上一頁
              </button>
              </router-link
            >
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
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      coupon_code: "",
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
          mitt.emit("get-cart");
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "購物車");
        });
    },
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const data = this.form;
      this.$http
        .post(url, { data: data })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, "感謝您的訂購，訂單已送出");
          this.$refs.form.resetForm(); // 清空表格內容,resetForm是vue內建功能
          this.cartData = {};
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, "訂單成立");
        });
    },
    // vee validate自訂驗證規則
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入正確的電話號碼";
    },
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    this.getCart();
  },
};
</script>