<template>

  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for='(item) in imgs'
        v-bind:key='item.id'
      >
        <img
          class="img_imgs"
          :src="item.url"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop : true
      },
      imgs: [
        {
          id: "0001",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543578917626&di=72363a4c942c3667f87bcdf7080c5531&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F76%2F35%2F49558PICq78_1024.jpg"
        },
        {
          id: "0002",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543578917626&di=f779c3a410ee381260c44e110b2352ba&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dbb23a5c6bcfd5266b3263457c371fd5e%2Fd1160924ab18972beeefa9e7eccd7b899f510ac1.jpg"
        },
        {
          id: "0003",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543578917626&di=8d04209789af3ebb2b876448a1999429&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D6d84625ee1f81a4c323fe48abf430a2c%2F500fd9f9d72a6059449a31302234349b033bba16.jpg"
        }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background: white;
}

.img_imgs {
  width: 100%;
  height: 31.25vw;
  object-fit: cover;
}
</style>
