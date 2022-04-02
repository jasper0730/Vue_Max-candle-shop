<template>
  <div class="bg-light" style="height: 100vh">
    <div class="container">
      <Loading :active="isLoading"></Loading>
      <!-- 點擊按鈕觸發submit -->
      <form class="row justify-content-center pt-7" @submit.prevent="signIn">
        <div class="col-10 col-sm-6 col-md-4">
          <h1 class="h3 text-center">請先登入</h1>
          <div class="mb-3">
            <label for="email" class="col-form-label">Email Address</label>
            <input
              type="email"
              class="form-control bg-light"
              id="email"
              placeholder="Email Address"
              required
              autofocus
              v-model="user.username"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="col-form-label">Password</label>
            <input
              type="password"
              class="form-control bg-light"
              id="password"
              placeholder="Password"
              required
              v-model="user.password"
            />
          </div>
          <div class="mb-3 text-end">
            <!-- type要submit才會觸發 -->
            <button
              type="submit"
              class="btn btn-dark btn-lg rounded w-100 mb-2"
            >
              登入
            </button>
            <router-link to="/">
              <button
                type="button"
                class="btn btn-outline-dark btn-lg rounded w-100"
              >
                回首頁
              </button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "", // 取得username
        password: "", // 取得password
      },
      isLoading: false,
    };
  },
  methods: {
    //   觸發submit後,執行對應的函式
    signIn() {
      this.isLoading = true;
      // 從.env取得環境變數
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http // 套件axios的方法
        .post(url, this.user) // 帶入後端所需的資料(網址、帳密)
        .then((res) => {
          const { token, expired } = res.data; // 將回傳的token、expired 取出
          document.cookie = `myToken=${token}; expires=${new Date(expired)}`; // 取出後存入cookie(給驗證用)
          this.isLoading = false;
          this.$router.push("/admin/products"); // 成功跳轉到對應的頁面(後台產品)
        })
        .catch((err) => {
          (this.user.username = ""),
            (this.user.password = ""),
            (this.isLoading = false);
          this.$httpMessageState(err.response, "登入");
        });
    },
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
};
</script>