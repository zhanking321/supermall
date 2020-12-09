<template>
  <div class="tabbar-item" @click="handleClick">
      <div v-if="!isActive"><slot name="item-icon"/></div>
      <div v-else><slot name="item-icon-active"/></div>
      <div :style="activeStyle"><slot name="item-text"/></div>     
  </div>
</template>
<script>
export default {
    name: "tabbaritem",
    props: {
        path: String,
        activeColor: {
            type: String,
            default: "red"
        }
    },
    data() {
        return {
            // isActive: false
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {} 
        }
    },
    methods: {
        handleClick(){
            // this.isActive = true
            this.$router.push(this.path).catch(err => err)
        }
    },
}
</script>

<style>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  img{
      width: 24px;
      height: 21px;
      margin-top: 5px;
      vertical-align: center;
  }
</style>