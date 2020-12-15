<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button class="check-btn" :is-check="isAllCheck" @click.native="allCheck"/>
          <span class="check-all">全选</span>
      </div>
      <div class="sum-up">
          <span>合计：￥{{price}}</span>
      </div>
      <div class="calculate" @click="calcClick">
          去计算({{count}})
      </div>
      <toast :message="message" :isShow="isShow"/>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
import { mapGetters } from 'vuex'
import { toastMixin } from 'common/mixin'

export default {
    name: "CartBottomBar",
    mixins: [toastMixin],
    components: {
        CheckButton
    },
    methods: {
        allCheck() {
            // this.$store.commit("allCheck")
            if(this.isAllCheck) {
                this.cartList.forEach(item => item.checked = false)
            }else {
                this.cartList.forEach(item => item.checked = true)
            }
        },
        
        calcClick() {
            if(this.count == 0) {
                this.showToast("没有选中任何商品")
            }else {
                this.showToast("跳转页面中...")
            }
        }
    },
    computed: {
        ...mapGetters(["cartList"]),
        price() {
            return this.$store.state.cartList.filter(item => item.checked).reduce(
            ((prev, cur) => prev + cur.count * cur.price), 0).toFixed(2)
        },
        count() {
            return this.$store.state.cartList.filter(item => item.checked)
            .reduce(((prev, cur) => prev + cur.count), 0)
        },
        isAllCheck() {
            if(this.$store.state.cartList.length) {
                return this.$store.state.cartList.every(item => item.checked)
            }
            return false
        }
    }
}
</script>

<style scoped>
  .bottom-bar{
      height: 44px;
      font-size: 15px;
      display: flex;
  }

  .check-content{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
  }

  .check-content .check-btn{
      margin: 0px 8px;
  }

  .check-content .check-all{
      
      padding-left: 5px;
  }

  .sum-up{
      flex: 1;
      padding-left: 30px;
      line-height: 44px;
  }

  .calculate{
      color: #fff;
      width: 100px;
      background: red;
      text-align: center;
      line-height: 44px;
  }
</style>