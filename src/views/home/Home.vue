<template>
  <div id="home">
    <nav-bar class="home_bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control 
          ref="tabControl1" 
          class="tabControl" 
          :titles="['流行', '新款', '精选']" 
          @tabClick="tabClick"
          v-show="isFixed" 
    />
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="backScroll" @pullingUp="loadMore">
      <home-swiper :cbanners="banners" :cdata="data" @itemImageLoad="swiperImageLoad"></home-swiper>
      <home-recommends-view :crecommends="recommends"/>
      <home-feature></home-feature>
      <tab-control 
            ref="tabControl2" 
            :titles="['流行', '新款', '精选']" 
            @tabClick="tabClick"      
      />
      <goods-list :clist="showGoods"/>
    </scroll>

    <back-top @click.native="backClick"  v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import { mixin, backTopMinxin } from 'common/mixin'

import HomeSwiper from './childview/HomeSwiper'
import HomeRecommendsView from './childview/HomeRecommendsView'
import HomeFeature from './childview/HomeFeature'

import { getHomeMultidata, getHomeGoods } from 'network/home'
export default {
    name: "home",
    components:{
      NavBar,
      TabControl,
      GoodsList,
      Scroll,

      HomeSwiper,
      HomeRecommendsView,
      HomeFeature
    },
    mixins: [mixin, backTopMinxin],
    data() {
      return {
        banners: [],
        recommends: [],
        data: "",
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []},
        },
        currentType: "pop",
        offsetTop: 0,
        isFixed: false,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")

      /* this.$bus.on("itemImageLoad", () => {
        console.log("-++")
      }) */
    },
    unmounted() {
      console.log("destroyed")
    },
    activated() {
      this.$refs.scroll.scrollToTop(0, this.saveY, 10)  //回来时滚动到离开时的位置
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y  //记住离开时的位置
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /* 
        事件监听相关的方法
      */
      tabClick(index) {
        switch(index) {
          case 0: {
            this.currentType = 'pop'
            break
          }
          case 1: {
            this.currentType = 'new'
            break
          }
          case 2: {
            this.currentType = 'sell'
            break
          }
        }
        this.$refs.tabControl1.currentIndex = index  // 让两个tabControl保持一致
        this.$refs.tabControl2.currentIndex = index
      },

      backScroll(pos) {
        this.listenShowBackTop(pos)

        /* 通过监听滚动判断什么时候显示第一个tabControl */
        this.isFixed = (-pos.y) > (this.offsetTop - 44)
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()  //让betterscroll重新计算可滚动高度
      },
      swiperImageLoad() {
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /* 
        网络请求相关的方法
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          /* 实现多次下拉加载更多，否则只能加载一次 */
          this.$refs.scroll.finishPullUp()
        })
      },

    }
}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
  }
  .home_bar{
    background: var(--color-tint);
    color: #fff;
    /* 使用原生滚动时为了让导航栏不随之滚动而设置 */
/*     position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    z-index: 9;
  }

  .tabControl{
    position: fixed;
    left: 0;
    right: 0;
    top: 43px;
  }
  .content{
    height: calc(100% - 49px);
    overflow: hidden;
  }
</style>