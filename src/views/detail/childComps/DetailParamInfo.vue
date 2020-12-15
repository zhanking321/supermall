<template>
  <div class="param-info" v-if="Object.keys(goodsParam) !== 0">
      <table v-for="(table, index) in goodsParam.sizes" :key="index" class="info-size">
          <tr v-for="(row, index1) in table" :key="index1">
              <td v-for="(col, index2) in row" :key="index2">
                  {{col}}
              </td>
          </tr>
      </table>
      <table class="info-param">
          <tr v-for="(item, idx) in goodsParam.infos" :key="idx">
              <td class="info-param-key">{{item.key}}</td>
              <td class="param-value">{{item.value}}</td>
          </tr>
      </table>
      <div class="info-img" v-if="goodsParam.image !== ''">
        <img :src="goodsParam.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: "DetailParamInfo",
    props: {
        goodsParam: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
  .param-info{
      font-size: 13px;
      border-bottom: 5px solid #f2f5f8;
  }

  table{
      width: 100%;
      text-align: center;
  }

  table tr{
      height: 40px;
  }

  table tr td:first-child{
      text-align: left;
      padding-left: 13px;
      width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.2);
  }

  .info-param tr td:nth-child(2) {
      text-align: left;
  }

  .param-value{
      color: var(--color-tint)
  }

  .info-img img {
    width: 100%;
  }
</style>