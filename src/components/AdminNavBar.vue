<template>
<div class="sticky-top bg-light">
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
        class="collapse navbar-collapse justify-content-end text-center"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav align-items-center">
          <router-link class="nav-item nav-link ms-3 h5" to="/admin/products"
          
            >產品</router-link
          >
          <router-link class="nav-item nav-link ms-3 h5" to="/admin/orders"
            >訂單</router-link
          >
          <router-link class="nav-item nav-link ms-3 h5" to="/admin/coupons"
            >優惠券</router-link
          >
          <a class="nav-item nav-link ms-3 h5" href="#" @click.prevent="$emit('logout')"
              >登出</a
            >
        </div>
      </div>
    </nav>
  </div>

</template>