<template>
  <div>
      <nav-bar>
        <template v-slot:left>
            <div class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt=""> 
            </div>
        </template>
        <template v-slot:center>
            <div class="titles">
                <div v-for="(item, index) in titles" :key="item" 
                    @click="titleClick(index)"
                    class="title-item"
                    :class="{active: index === currentIndex}">
                    {{item}}
                </div>
            </div>
        </template>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name: "DetailNavBar",
    components: {
        NavBar
    },
    data() {
        return {
            titles: ["商品", "参数", "评论", "推荐"],
            currentIndex: 0
        }
    },
    methods: {
        backClick() {
            this.$router.back()
        },
        titleClick(index) {
            this.currentIndex = index
            this.$emit("titleClick", index)
        }
    },
}
</script>

<style scoped>
    .titles{
        display: flex;
        font-size: 14px;
    }
    .title-item{
        flex: 1;
    }
    .back{
        margin-top: 6px;
    }
    .active{
        color: var(--color-high-text);
    }
</style>