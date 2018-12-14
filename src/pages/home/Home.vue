<template>
  <div>
    <div>this is homepage</div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <types-list></types-list>

    <div :class="{ 'abc': isActive }">情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一</div>
    <div :class="{ abc : isActive }">情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二</div>
    <div :class="classObject">情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三</div>
    <!-- <div :class="{ abc : isActive }">情况四情况四情况四情况四情况四情况四情况四情况四情况四情况四情况四情况四情况四情况四情况四情况四</div> -->
    <div></div>
  </div>

</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/Swiper.vue";
import TypesList from "./components/TypesList.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    TypesList
  },
  data() {
    return {
      isActive: true,
      sty: "abc",
      classObject: {
        abc: true,
        bcd: false
      }
    };
  }
};
</script>

<style  scoped>
.abc {
  width: 50px;
}
.abc:active {
  width: 100px;
}
.bcd {
  width: 100px;
}
</style>

