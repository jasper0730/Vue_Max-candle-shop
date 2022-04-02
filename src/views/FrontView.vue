<template>
  <FrontNavBar></FrontNavBar>
  <router-view />
  <FrontFooter></FrontFooter>
</template>

<script>
import FrontNavBar from "@/components/FrontNavBar.vue";
import FrontFooter from "@/components/FrontFooter.vue";
export default {
  components: {
    FrontNavBar,
    FrontFooter,
  },
};
</script>