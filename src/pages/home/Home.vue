<template>
  <div>
    <div>this is homepage</div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>aaaaaaaaaaaaaaa</div>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/Swiper.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style  scoped>
</style>

