<template>
  <footer class = "footer_guide border-1px">
    <a href="javascript:;" class = "guide_item" 
    :class="{ on:'/home' === $route.path }" @click="goto('/home')" >
      <span class = "item_icon">
        <i class = "iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class = "guide_item" 
    :class="{ on:'/classify' === $route.path }" @click="goto('/classify')">
      <span class = "item_icon">
        <i class = "iconfont icon-dingdan"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class = "guide_item" 
    :class="{ on:'/things' === $route.path }" @click="goto('/things')" >
      <span class = "item_icon">
        <i class = "iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class = "guide_item" 
    :class="{ on:'/shopping' === $route.path }" @click="goto('/shopping')">
      <span class = "item_icon">
        <i class = "iconfont icon-gouwu"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class = "guide_item" 
    :class="{ on:'/profile' === $route.path }" @click="goto('/profile')">
      <span class = "item_icon">
        <i class = "iconfont icon-wode"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  // 方法
  methods: {
    // 设置路径
    goto (path) {
      // 编程式路由
      this.$router.replace(path) // 没有回退
      // this.$router.push() // 有回退
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.footer_guide // footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  bottom 0
  left 0 
  right 0 
  background-color #ffffff
  width 100%
  height 50px
  display flex
  justify-content space-around
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #b4282d
    span
      font-size 12px
      marigin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
