<template>
  <ToastMessages></ToastMessages>
  <router-view />
</template>

<style lang="scss">
@import "./assets/all";
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Allura&display=swap");

body {
  background-color: #f8f9fa;
}

// 響應式表格不破版,文字會自動斷行
table {
  table-layout: fixed;
  word-break: break-all;
}

// 響應式表格的文字不斷行
button {
  white-space: nowrap;
}

.logo {
  font-family: "Allura", cursive;
}

.object-fit{
  object-fit: cover;
}
</style>
