<template>
  <div class="cart-list">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'
export default {
  components: { CartListItem },
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"])
  }
}
</script>

<style>

</style>