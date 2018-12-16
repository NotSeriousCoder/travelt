<template>
  <div v-if="listData && listData.length>0">
    <div v-for="(item,index) in listData" :key="getRowIndex(index)"></div>
  </div>
</template>
<script>
export default {
  name: "GridView",
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getRowIndex(position) {
      var index = parseInt(position / 4);
      console.log("index==" + index);
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>

