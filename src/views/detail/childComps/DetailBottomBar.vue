<template>
  <div class="bottom-bar">
      <div class="bar-item bar-left">
          <div>
              <i class="icon service"></i>
              <span class="text">客服</span>
          </div>
          <div>
              <i class="icon shop"></i>
              <span class="text">店铺</span>
          </div>
          <div @click="collected">
              <i class="icon select" :class="{collect : isCollected}"></i>
              <span class="text" >收藏</span>
          </div>
      </div>
      <div class="bar-item bar-right">
          <div class="cart" @click="addToCart">加入购物车</div>
          <div class="buy" @click="toShopCart">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "DetailBottomBar",
    data() {
        return {
            isCollected: false
        }
    },
    methods: {
        collected() {
            this.isCollected = !this.isCollected
        },
        addToCart() {
            this.$emit("addToCart")
        },
        toShopCart() {
            this.$router.push("/shopcart")
        }
    },
}
</script>

<style>
    .bottom-bar{
        position: relative;
        z-index: 10;
        height: 58px;
        background: #fff;
        display: flex;
    }

    .bar-item{
        flex: 1;
        display: flex;
        text-align: center;
    }

    .bar-item div{
        flex: 1;
    }

    .bar-left .text{
        font-size: 13px;
    }

    .bar-left .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }

    .bar-left .collect{
        background-position:0 -27px;
    }

    .bar-left .service {
        background-position:0 -54px;
    }

    .bar-left .shop {
        background-position:0 -98px;
    }

    .bar-right{
        line-height: 58px;
        font-size: 15px;
    }

    .bar-right .cart{
        background: #ffe817;
        color: #333;
    }

    .bar-right .buy{
        background: #f69;
        color: #fff;
    }
</style>