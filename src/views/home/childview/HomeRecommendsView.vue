<template>
  <div class="recommend">
      <div v-for="item in crecommends" :key="item" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "HomeRecommendView",
    props: ["crecommends"]
}
</script>

<style>
    .recommend{
        width: 100%;
        display: flex;
        font-size: 12px;
        text-align: center;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>