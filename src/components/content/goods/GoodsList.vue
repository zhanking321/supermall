<template>
    <div class="goods-list">
        <goods-list-item v-for="item in clist" :key="item" :citem="item"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: "GoodsList",
    props: {
        clist: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>

<style>
    .goods-list{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>