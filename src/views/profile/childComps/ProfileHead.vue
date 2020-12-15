<template>
  <div class="profile-head">
    <slot name="user-icon">
      <div class="user-img">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
        <!-- <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg> -->
    </slot>
    <div class="some-info">
        <div class="login-regis">
        登录/注册
        </div>
        <div class="user-phone">
          <img src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
    </div>
    <div class="tick">
        <!-- 缺图 -->
    </div>
  </div>
</template>

<script>
export default {
    name: "ProfileHead"
}
</script>

<style scoped>
  .profile-head{
    display: flex;
    color: #fff;
    height: 100px;
    background: var(--color-tint);
    align-items: center;
  }

  .profile-head img {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
    margin: 0 10px;
  }

  .user-img {
    margin-left: 10px;
  }

  .user-phone img{
    background-color: var(--color-tint);
    width: 20px;
    height: 15px;
    position: relative;
    top: 3px;
  }

  .user-phone span{
    margin-left: -10px;
  }
  .some-info{
    flex: 1;
  }

  .some-info .login-regis{
    padding-left: 15px;
  }

  .some-info .user-phone{
    margin-top: 8px;
    font-size: 12px;
  }

  .tick{
    width: 50px;
  }

  .tick .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }
</style>