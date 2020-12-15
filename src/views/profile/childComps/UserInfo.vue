<template>
  <div class="user-info">
    <div class="my-yue">
        <div class="money"><span>0.00</span>元</div>
        <div>我的余额</div>
    </div>
    <div class="my-youhui">
        <div class="count"><span>0</span>个</div>
        <div>我的优惠</div>
    </div>
    <div class="my-score">
        <div class="grade"><span>0</span>分</div>
        <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
    name: "UserInfo"
}
</script>

<style scoped>
  .user-info{
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #333;
      padding-top: 15px;
      border-bottom: 20px solid rgb(243, 237, 237);
  }

  .user-info>div{
      flex: 1;
  }

  span{
      font-size: 28px;
      font-weight: 700;
      color: #ff5f3e;
  }

  .money, .count, .grade{
      margin-bottom: 8px;
  }
</style>