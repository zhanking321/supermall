<template>
  <div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
        <div v-for="(item, index) in subcategories.list" :key="index" class="item">
            <a :href="item.link">
                <img :src="item.image" @load="imageLoad">
                <div class="item-text">{{item.title}}</div>
            </a>
        </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView'
export default {
    name: "TabContentCategory",
    props: ["subcategories"],
    data() {
        return {
            counter: 0
        }
    },
    components: {
        GridView
    },
    methods: {
        imageLoad() {
            this.$emit("imageLoad")
            // if(++this.counter == this.subcategories.list.length) {
            //     this.counter = 0
                
            // }
        }
    },
}
</script>

<style>
    .item{
        font-size: 12px;
        text-align: center;
    }
    .item img{
        width: 50px;
        height: 50px;
    }
    .item-text{
        margin-top: 8px;
    }
</style>