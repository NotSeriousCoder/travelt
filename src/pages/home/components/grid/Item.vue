<template>
  <div id="div_parent">
    <div>
      <img :src="imgUrl">
    </div>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  data() {
    return {};
  },
  props: {
    content: {
      type: String,
      default: "默认内容"
    },
    imgUrl: {
      type: String,
      default: require("../../../../assets/imgs/plus_blue.jpg")
    }
  }
};
</script>

<style lang="stylus" scoped>
#div_parent {
  padding: 0.1rem;
}

div {
  text-align: center;
}

img {
  width: 100%;
}
</style>

