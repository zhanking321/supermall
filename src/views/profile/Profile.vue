<template>
  <div>
      <nav-bar class="nav-bar">
        <template v-slot:center> 
            个人中心
        </template>
      </nav-bar>
      <profile-head/>
      <user-info/>
      <list-view :list-data="orderList"/>
      <list-view :list-data="serviceList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import ProfileHead from './childComps/ProfileHead'
import ListView from './childComps/ListView'
import UserInfo from './childComps/UserInfo'
export default {
    name: "profile",
    components: {
      NavBar,
      ProfileHead,
      ListView,
      UserInfo
    },
    data: function () {
		  return {
		    orderList: [
          {icon: require("../../assets/img/profile/message.svg"), iconColor: '#ff8198', info: '我的消息'},
          {icon: require("../../assets/img/profile/pointer.svg"), iconColor: '#fc7b53', info: '积分商城'},
          {icon: require("../../assets/img/profile/vip.svg"), iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: require("../../assets/img/profile/cart.svg"), iconColor: '#ff8198', info: '我的购物车'},
          {icon: require("../../assets/img/profile/shopping.svg"), iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    },
}
</script>

<style scoped>
  .nav-bar{
      background: var(--color-tint);
      color: #fff;
      font-weight: 700;
  }
</style>