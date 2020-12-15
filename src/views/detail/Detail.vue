<template>
  <div class="detail">
      <nav-bar class="navBar" @titleClick="navBarClick" ref="navBar"></nav-bar>
      <!-- <div>{{$store.state.cartList[0] == undefined ? -1 : $store.state.cartList[0].count}}</div> -->
      <scroll ref="scroll" class="area" @scroll="handleScroll" :probe-type="3">
          <template v-slot>
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info ref="param" :goods-param="goodsParam"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <div  class="strong-recommend">
                倾情推荐
            </div>
            <goods-list :clist="recommends" ref="recommend"/>
          </template>
      </scroll>
      <detail-bottom-bar @addToCart="addOne"/>
      <back-top @click.native="backClick"  v-show="isShowBackTop"/>
      <toast :message="message" :isShow="isShow"/>
  </div>
</template>

<script>
import NavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import { mixin, backTopMinxin, toastMixin } from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
import { mapActions } from 'vuex'
export default {
    name: "Detail",
    components: {
        NavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar,
        Scroll,
        GoodsList,
    },
    mixins: [mixin, backTopMinxin, toastMixin],
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            goodsParam: {},
            commentInfo: {},
            recommends: [],
            themeTopYs: [],
            currentIndex: 0,
        }
    },
    created() {
        // 保存存入的iid
        this.iid = this.$route.params.iid

        // 根据iid请求详情数据
        getDetail(this.iid).then(res => {

            // console.log(res)
            const data = res.result
            // 获取顶部图片的轮播数据
            this.topImages = res.result.itemInfo.topImages

            // 获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            // 获取店铺信息
            this.shop = new Shop(data.shopInfo)
            
            // 获取商品详情
            this.detailInfo = data.detailInfo

            // 获取商品参数
            this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)

            // 获取用户评论信息
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }
        })
    
        // 请求推荐数据
        getRecommend().then(res => {
            this.recommends = res.data.list
        })

    },
    methods: {
        ...mapActions(['addCart']),
        imageLoad() {
            // 利用混入中的防抖减少this.$refs.scroll.refresh的执行,对应DetailGoodsinfo的imageLoad第一行
            // this.refresh()  

            // 对应DetailGoodsinfo的imageLoad第二行
            this.$refs.scroll.refresh()

            // 正确获取offsetTop，实现点击tab项跳转到对应区域
            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.param.$el.offsetTop - 34)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 34)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 88)
            this.themeTopYs.push(Number.MAX_VALUE)  // 为了简化联动效果的if判断条件多加一个最大值
            // console.log(this.themeTopYs)
        },

        navBarClick(index) {
            this.$refs.scroll.scrollToTop(0, -this.themeTopYs[index], 200)
        },

        handleScroll(pos) {
            const currentY = - pos.y
            const length = this.themeTopYs.length
            for(let i = 0; i < length-1; i++) {
                if(this.currentIndex != i && (currentY >= this.themeTopYs[i] && currentY < this.themeTopYs[i+1]) ){
                    this.currentIndex = i
                    this.$refs.navBar.currentIndex = this.currentIndex
                }
            }
            
            this.listenShowBackTop(pos)
        },

        addOne() {
            const product = {}
            product.iid = this.iid
            product.title = this.goods.title
            product.price = this.goods.realPrice
            product.desc = this.goods.desc
            product.image = this.topImages[0]
            
            // this.$store.dispatch("addCart", product)
            this.addCart(product).then(res => {
                this.showToast(res)
            })
        }
    },

}
</script>

<style scoped>
    .detail{
        position: relative;
        z-index: 1;
        background: #fff;
        height: 100vh;
    }
    .navBar{
        position: relative;
        z-index: 9;
        background: #fff;
    }
    .area{
        height: calc(100% - 44px - 58px);
    }
    .strong-recommend{
        width: 80px;
        height: 30px;
        line-height: 30px;
        margin: 8px;
        text-align: center;
        border-radius: 10px;
        color: var(--color-tint);
        font-weight: bolder;
        border: 2px solid var(--color-tint);
    }
</style>