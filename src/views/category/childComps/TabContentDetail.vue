<template>
  <div>
      <grid-view v-if="categoryDetail.length !== 0">
          <goods-list-item v-for="(item, index) in categoryDetail" 
                :key="index" 
                :citem="item"
                class="detailImg"
                />
      </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView'
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
    name: "TabContentDetail",
    props:["categoryDetail"],
    components: {
        GridView,
        GoodsListItem
    }
}
</script>

<style scoped>

</style>