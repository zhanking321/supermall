<template>
    <div class="home-swiper">
        <swiper>
            <template v-slot>
                <swiper-item v-for="(item, index) in cbanners" :key= "index">
                    <template v-slot>
                        <a :href="item.link"><img :src="item.image" @load="imageLoad"></a>
                    </template>
                </swiper-item>
                <h1>{{cdata}}</h1>
            </template> 
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name: "HomeSwiper",
    props: ["cdata", "cbanners"],
    data() {
        return{
            isShow: true
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        imageLoad() {
            if(this.isShow) {
                this.isShow = !this.isShow
                this.$emit("itemImageLoad")
            }
        }
    },
}
</script>

<style>
    .home-swiper{
        height: 220px;
    }
    .home-swiper .swiper{
        height: 210px
    }
</style>