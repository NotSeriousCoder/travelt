<template>
  <div id="div_header">
    <div id="div_left">
      <span
        id='span_back'
        class='iconfont top_text'
      >&#xe735;</span>
    </div>

    <div id="div_center">
      <span
        id="span_search_hint"
        class="top_text"
      >输入城市/景点/游玩主题</span>
      <span class='iconfont'>&#xe610;</span>
    </div>
    <div id="div_right">
      <p class="top_text">城市
        <span
          class='iconfont'
          style="font-size:0.1rem"
        >&#xe600;</span>
      </p>
    </div>

  </div>

</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
@import '~stys/varibles.styl';

#div_header {
  // /* 1rem = html font-size */
  background: $bgColor;
  height: 0.86rem;
  display: flex;
  align-items: center;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}

#div_left {
  color: white;
  width: 0.64rem;
  float: left;
}

#div_center {
  border-radius: 0.14rem;
  max-height: 0.66rem;
  min-height: 0.58rem;
  display: flex;
  align-items: center;
  flex: 1;
  background: white;
  padding-left: 0.14rem;
  padding-right: 0.14rem;
  color: #666666;
}

#div_right {
  min-width: 1.24rem;
  float: right;
  text-align: center;
  line-height: 0.86rem;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

#span_search_hint {
  flex: 1;
}

#span_back {
  font-size: 0.58rem;
}

.top_text {
  font-size: 0.3rem;
  overflow: auto;
}
</style>


