<template>
  <div class="mainTabBar">
    <!-- <router-view/> -->  <!-- 切记勿忘记这个标签 -->
    <tab-bar>
      <tab-bar-item path='/home' activeColor="#ff8198">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" class="ignore">   
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" class="ignore">   
        </template>  
        <template v-slot:item-text>
          首页
        </template>           
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="#ff8198">
      <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" class="ignore">   
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" class="ignore">   
        </template>  
        <template v-slot:item-text>
          分类
        </template>  
      </tab-bar-item>
      <tab-bar-item path='/shopcart' activeColor="#ff8198">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" class="ignore">   
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" class="ignore">   
        </template>  
        <template v-slot:item-text>
          购物车
        </template>  
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="#ff8198">    
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg" class="ignore">   
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" class="ignore">   
        </template>  
        <template v-slot:item-text>
          我的
        </template>  
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name: "maintabbar",
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
  .mainTabBar{
    width: 100%;
  }
</style>
