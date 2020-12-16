<template>
  <div class="cart-list">
      <cart-list-item v-for="(item, index) in cartList" 
          :key="index" 
          :item-info="item"
          @going="playToast"/>
      <toast :message="message" :isShow="isShow"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { toastMixin } from 'common/mixin'
import { mapGetters } from 'vuex'
export default {
  components: { CartListItem },
  name: "CartList",
  mixins: [toastMixin],
  computed: {
    ...mapGetters(["cartList"])
  },
  methods: {
    playToast() {
      this.showToast("亲，有缘再见")
    }
  },
}
</script>

<style>

</style>