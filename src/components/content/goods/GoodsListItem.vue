<template>
    <div class="goods-list-item" @click="itemClick">
        <img :src="showImage" @load="imageLoad">
        <div class="goods-info">
            <p>{{citem.title}}</p>
            <span class="price">{{citem.price}}</span>
            <span class="collect">{{citem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
        citem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        showImage() {
            if(this.citem.show) {
                return this.citem.show.img
            }else if(this.citem.img) {
                return this.citem.img
            }else {
                return this.citem.image
            }
        }
    },
    methods: {
        imageLoad() {
            this.$bus.emit("itemImageLoad")
        },
        itemClick() {
            this.$router.push("/detail/" + this.citem.iid)
        }
    }
}
</script>

<style scoped>
    .goods-list-item{
        width: 47%;
        padding-bottom: 40px;
        position: relative;
    }
    .goods-list-item img{
        width: 100%;
        height: 250px;
        border-radius: 5px;
        border:1px solid var(--color-tint);
    }
    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .goods-info .collect {
        position: relative;
    }
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;  /* 0 0是坐标，14 14是背景图的大小 */
    }
</style>