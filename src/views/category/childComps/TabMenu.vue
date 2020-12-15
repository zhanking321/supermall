<template>
  <scroll id="tab-menu">
    <div class="menu-list">
        <div class="menu-list-item" 
            @click="tabClick(index)"
            :class="{active: currentIndex === index}"
            v-for="(item, index) in categories" 
            :key="index">
                {{item.title}}
        </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
    name: "TabMenu",
    props: ["categories"],
    components: {
        Scroll
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        tabClick(index) {
          // console.log(index)
          this.currentIndex = index
          this.$emit("selectItem", index)
        }
    },
}
</script>

<style scoped>
  #tab-menu{
      height: (100% - 44px -49px);
      width: 100px;
      overflow: hidden;
  }
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>