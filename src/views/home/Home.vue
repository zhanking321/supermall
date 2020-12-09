<template>
  <div id="home">
      <nav-bar class="home_bar">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <home-swiper :cbanners="banners" :cdata="data"></home-swiper>
      <home-recommends-view :crecommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childview/HomeSwiper'
import HomeRecommendsView from './childview/HomeRecommendsView'

import {getHomeMultidata} from 'network/home'
export default {
    name: "home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendsView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        data: ""
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
}
</script>

<style>
  .home_bar{
    background: var(--color-tint);
    color: #fff;
  }
</style>