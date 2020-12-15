<template>
  <div class="cart-nav-bar">
      <nav-bar class="nav-bar">
          <template v-slot:center> 
              购物车({{length}})
          </template>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'
export default {
  name: "CartNavBar",
  components: {
      NavBar
  },
  computed: {
    // mapGetters的两种用法
    // 1.数组语法
    // ...mapGetters(["cartLength"])

    // 2.对象语法
    ...mapGetters({
        length: "cartLength"
    })
  }
}
</script>

<style scoped>
  .nav-bar{
      background: var(--color-tint);
      color: #fff;
      font-weight: 700;
  }
</style>