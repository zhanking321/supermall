<template>
    <div>
        <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
            <div class="info-head">
                <div class="info-justify">用户评价</div>
                <div class="info-more">更多</div>
            </div>
            <div class="info-user">
                <img :src="commentInfo.user.avatar" class="info-avatar" />
                <span class="info-uname">{{commentInfo.user.uname}}</span>
            </div>
            <div class="info-main">
                <div class="info-content">{{commentInfo.content}}</div>
                <div class="info-other">
                    <span class="info-date">{{date(commentInfo.created)}}</span>
                    <span class="info-style">{{commentInfo.style}}</span>
                </div>
                <img v-for="(item, index) in commentInfo.images" :src="item" alt="" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
    name: "DetailCommentInfo",
    props: {
        commentInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        date(value) {
            const da = new Date(value * 1000)
            return formatDate(da, "yyyy/MM/dd hh:mm:ss")
        }
    }
}
</script>

<style scoped>
  .comment-info{
      margin-top: 40px;
      padding: 5px 15px;
      color: #333;
      border-bottom: 5px solid #f2f5f8;
  }

  .info-head{
      display: flex;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .info-head{
      flex: 1;
  }

  .info-more{
      font-size: 14px;
  }

  .info-user{
      margin: 15px 0;
  }
  .info-user img{
      width: 42px;
      height: 42px;
      border-radius: 50%;
      margin-right: 10px;
  }

  .info-user .info-uname{
      position: relative;
      top: -13px;
  }

  .info-main{
      font-size: 14px;
      padding: 0 5px;
  }

  .info-main img{
      width: 70px;
      height: 70px;
      margin-right: 5px;
  }

  .info-content{
      line-height: 20px;
  }

  .info-other{
      padding: 10px 0;
      color:  #999;
      font-size: 13px;
  }

  .info-other .info-style{
      padding-left: 10px;
  }
</style>