<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="info-desc clear-fix">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div v-for="(citem, idx) in detailInfo.detailImage" :key="idx">
        <div class="info-key">{{citem.key}}</div>
        <div class="info-list" :class="{ssp: idx === 0}">
            <img v-for="(item, index) in citem.list" 
              :src="item" 
              :key="index"
              @load="imageLoad">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "DetailGoodsInfo",
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            counter: 0,
            detailImageLength: 0
        }
    },
    methods: {
        imageLoad() {
          // this.$emit("imageLoad")   //每加载一张图都发射
          if(++this.counter == this.detailImageLength) {  // 等到最后一张图加载完成才发射
              this.$emit("imageLoad")
          } 
            
        }
    },
    watch: {
        detailInfo() {
            this.detailImageLength = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 98%;
    height: 550px;
  }

  .ssp img:last-child{
      height: 157px;
  }
</style>