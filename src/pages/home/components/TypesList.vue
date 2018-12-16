<template>
  <div id="div_category">
    <table id="table_types" bordercolor="white" border="3px" cellspacing="3px">
      <tr>
        <td>
          <div id="div_item">
            <!-- <div style="height: 300px; width: 100%vh; background: blue;"> -->
            <!-- <img
              class="item_img"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543578917626&di=72363a4c942c3667f87bcdf7080c5531&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F76%2F35%2F49558PICq78_1024.jpg"
            />-->
            <!-- </div> -->
            <p>旅游景点</p>
          </div>
        </td>
        <td>
          <div class="div_item">
            <img
              class="item_img"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543578917626&di=72363a4c942c3667f87bcdf7080c5531&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F76%2F35%2F49558PICq78_1024.jpg"
            >
            <p>旅游景点</p>
          </div>
        </td>
        <td>Savings</td>
        <td>Savings</td>
      </tr>
      <tr>
        <td>
          <!-- <img
            class="item_img"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543578917626&di=72363a4c942c3667f87bcdf7080c5531&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F76%2F35%2F49558PICq78_1024.jpg"
          />-->
          <p>旅游景点</p>
        </td>
        <td>
          <div class="div_item">
            <img
              class="item_img"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543578917626&di=72363a4c942c3667f87bcdf7080c5531&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F76%2F35%2F49558PICq78_1024.jpg"
            >
            <p>旅游景点</p>
          </div>
        </td>
        <td>$100</td>
        <td>$100</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "TypesList"
};
</script>


<style lang="stylus" scoped>
#div_category {
  background: green;
  margin-top: 30px;
  height: 50vw;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
  text-align: center;
}

#table_types {
  width: 100%;
  height: 100%;
  table-layout: fixed;
}

.item_img {
  width: 100%;
  height: 100%;
}

.div_item {
  width: 100%;
  height: 50%vw;
  background: blue;
}

td {
  background: red;
  padding: 6px;
}
</style>
