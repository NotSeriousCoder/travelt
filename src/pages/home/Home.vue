<template>
  <div>
    <div>this is homepage</div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <types-list></types-list>

    <div :class="{ 'abc': isActive }">情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一情况一</div>
    <div :class="{ abc : isActive }">情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二情况二</div>
    <div :class="classObject">情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三情况三</div>

    <grid-item :content="sty"></grid-item>
    <grid-view :listData="categories"></grid-view>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/Swiper.vue";
import TypesList from "./components/TypesList.vue";
import GridItem from "./components/grid/Item.vue";
import GridView from "./components/grid/GridView.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    TypesList,
    GridItem,
    GridView
  },
  data() {
    return {
      isActive: true,
      sty: "abc",
      classObject: {
        abc: true,
        bcd: false
      },
      categories: [
        {
          content: "旅游热线",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579573&di=9de47390491e0594201c7b19ef1894e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg2.100bt.com%2Fupload%2Fttq%2F20130226%2F1361838320424.jpg"
        },
        {
          content: "国内必去",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579633&di=2f3c59cac7f3db71c765a57cbc1ed355&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.36588.com.cn%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2F21cf1c07-70b2-4638-8601-93ad73b6576f.png"
        },
        {
          content: "国内必去",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579633&di=2f3c59cac7f3db71c765a57cbc1ed355&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.36588.com.cn%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2F21cf1c07-70b2-4638-8601-93ad73b6576f.png"
        },
        {
          content: "国内必去",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579633&di=2f3c59cac7f3db71c765a57cbc1ed355&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.36588.com.cn%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2F21cf1c07-70b2-4638-8601-93ad73b6576f.png"
        },
        {
          content: "国内必去",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579633&di=2f3c59cac7f3db71c765a57cbc1ed355&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.36588.com.cn%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2F21cf1c07-70b2-4638-8601-93ad73b6576f.png"
        },
        {
          content: "国内必去",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579633&di=2f3c59cac7f3db71c765a57cbc1ed355&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.36588.com.cn%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2F21cf1c07-70b2-4638-8601-93ad73b6576f.png"
        },
        {
          content: "国内必去",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579633&di=2f3c59cac7f3db71c765a57cbc1ed355&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.36588.com.cn%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2F21cf1c07-70b2-4638-8601-93ad73b6576f.png"
        },
        {
          content: "国内必去",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545579633&di=2f3c59cac7f3db71c765a57cbc1ed355&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.36588.com.cn%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fbig%2F21cf1c07-70b2-4638-8601-93ad73b6576f.png"
        }
      ]
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

