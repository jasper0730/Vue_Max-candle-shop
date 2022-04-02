<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://images.pexels.com/photos/4668364/pexels-photo-4668364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="d-block w-100 img-fluid object-fit"
          style="height:400px;"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <router-link
            class="btn btn-outline-light px-7 py-2"
            to="/products"
          >
            立即選購
          </router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/pic/brittani-burns-JbLuAdWm4tg-unsplash.jpg"
          class="d-block w-100 img-fluid object-fit"
          style="height:400px;"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <router-link
            class="btn btn-outline-light px-7 py-2"
            to="/products"
          >
            立即選購
          </router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/pic/jessica-delp-TwXhBwEsxwE-unsplash.jpg"
          class="d-block w-100 img-fluid object-fit"
          style="height:400px;object-position: right bottom;"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <router-link
            class="btn btn-outline-light px-7 py-2"
            to="/products"
          >
            立即選購
          </router-link>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center">
        <h3 class="my-5 fw-bold">
          歡迎光臨<span class="logo"> Max </span>香氛蠟燭
        </h3>
        <p class="fst-italic">" 我有故事，你有蠟燭嗎? "</p>
        <p>
          是的，我們賣的不只是一個有香味的蠟燭，我們希望透過各種不同的香味，讓您感受到每個蠟燭想表達的含意，將感官結合情境帶您進入夢幻的場景之中。
        </p>
      </div>
    </div>
    <div class="my-5">
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1573013327049-665b610ba98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=598&q=80"
            alt=""
            class="img-fluid w-100 object-fit"
            style="height: 350px;"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 mb-4 h4 fw-bold">我們的堅持</h4>
          <p>
            <span class="logo">Max</span
            >蠟燭追求的不只是帶給您香味，我們重視的是您全方位的感受。
          </p>
          <p>
            我們堅持從蠟燭、燭芯到精油皆100%純天然，無任何人工香精、散香劑等化學添加物，
            因此不同於市面上一般香氛蠟燭的香味容易擴散至整個房間。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between my-4">
        <div class="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1532592068623-db1978e40df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            class="img-fluid w-100 object-fit"
            style="height: 400px;"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 h4 mb-4 fw-bold">浪漫的香氛之旅</h4>
          <p>發現了嗎?</p>
          <p>
            我們的蠟燭的名字是不是都很熟悉呢，我們將製作的材料、產品的風格，與國家及各地風情做結合，當您點燃了我們的蠟燭，就像帶您的走了一趟精彩的旅程。
          </p>
        </div>
      </div>
    </div>
    <HotSlide class="d-none d-md-block"></HotSlide>
  </div>
</template>

<script>
import HotSlide from "@/components/HotSlide.vue";
export default {
  components: {
    HotSlide,
  },
};
</script>

