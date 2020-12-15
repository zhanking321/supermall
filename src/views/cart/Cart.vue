<template>
  <div class="cart">
      <nav-bar/>
      <scroll class="content" ref="scroll">
        <cart-list></cart-list>
      </scroll>
      <cart-bottom-bar/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from './childComps/CartNavBar'
import CartList from './childComps/CartLIst'
import CartBottomBar from './childComps/CartBottomBar'

export default {
    name: "cart",
    components: {
      Scroll,

      NavBar,
      CartList,
      CartBottomBar
    },
    activated() {
      this.$refs.scroll.refresh()
    },
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }

  .content{
    height: calc(100% - 93px - 44px);
    overflow: hidden;
  }
</style>