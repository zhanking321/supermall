<template>
  <div class="category">
      <nav-bar class="nav-bar">
          <template v-slot:center> 
              商品分类
          </template>
      </nav-bar>
      <div class="content">
        <tab-menu :categories="categories" @selectItem="selectItem"/>
        <scroll id="tab-content">
          <tab-control :titles="['综合', '新品', '销量']"/>
        </scroll>
      </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'

import TabMenu from './childComps/TabMenu'

import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'
export default {
    name: "category",
    components: {
      NavBar,
      Scroll,
      TabControl,
      TabMenu
    },
    data() {
      return {
        categories: [],
        categoryData:{},
        currentIndex: -1
      }
    },
    created() {
      getCategory().then(res => {
        console.log(res)
        // 1.获取分类数据
        this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    methods: {
      selectItem(index) {
        this._getSubcategories(index)
      },

      _getSubcategories(index) {
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          console.log(res)
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          // console.log(this.categoryData)
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },

      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      }
    },
}
</script>

<style scoped>
  .category{
    height: 100vh;
  }

  .nav-bar{
      background: var(--color-tint);
      color: #fff;
      font-weight: 700;
  }

  .content{
    height: calc(100% - 44px - 49px);
    display: flex;
  }

  #tab-content{
    overflow: hidden;
    flex: 1;
  }
</style>