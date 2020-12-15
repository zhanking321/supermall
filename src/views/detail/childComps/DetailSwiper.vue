<template>
  <swiper class="detail-swiper">
      <template v-slot>
          <swiper-item v-for="item in topImages" :key="item">
              <template v-slot>
                  <img :src="item" alt="">
              </template>
          </swiper-item>
          <h1>{{a}}</h1>
      </template>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name: "DetailSwiper",
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            a: ""
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
}
</script>

<style scoped>
    .detail-swiper{
        height: 300px;
        overflow: hidden;
    }
    .detail-swiper img{
        width: 100%;
        height: 562px;
    }
</style>