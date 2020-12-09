<template>
    <div class="home-swiper">
        <swiper>
            <template v-slot>
                <swiper-item v-for="(item, index) in cbanners" :key= "index">
                    <template v-slot>
                        <a :href="item.link"><img :src="item.image" alt=""></a>
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
    components: {
        Swiper,
        SwiperItem
    },
}
</script>

<style>
    .home-swiper{
        height: 160px;
    }
</style>