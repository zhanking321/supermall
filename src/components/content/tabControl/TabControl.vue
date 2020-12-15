<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item, index) in titles" :key="index" @click="tabClick(index)" >
          <span :class="{active: index === currentIndex}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "TabControl",
    props: ["titles"],
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        tabClick(index) {
            this.currentIndex = index
            this.$emit("tabClick", index)
        }
    },
}
</script>

<style scoped>
    .tab-control{
        background: white;
        display: flex;
        text-align: center;
        font-size: 14px;
        height: 44px;
        line-height: 44px;
        z-index: 8;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        border-bottom: 2px solid var(--color-tint);
        color: var(--color-high-text)
    }
</style>