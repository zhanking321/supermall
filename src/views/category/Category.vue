<template>
  <div class="category">
      <nav-bar class="nav-bar">
          <template v-slot:center> 
              商品分类
          </template>
      </nav-bar>
      <div class="content">
        <tab-menu :categories="categories" @selectItem="selectItem"/>
        <tab-control :titles="['综合', '新品', '销量']" 
            @tabClick="tabClick" 
            ref="tabControl1"
            class="tabControl1"
            v-show="isShow"/>
        <scroll id="tab-content" ref="scroll" :probe-type="3" @scroll="handleScroll">
          <tab-content-category :subcategories="showSubcategory" @imageLoad="handleLoad"/>
          <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick" ref="tabControl2"/>
          <tab-content-detail :category-detail="showCategoryDetail"/>
        </scroll>
      </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'

import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'
import TabContentDetail from './childComps/TabContentDetail'

import { debounce } from 'common/utils'
import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'
export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      TabControl,
      TabMenu,
      TabContentCategory,
      TabContentDetail
    },
    computed: {
      showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    data() {
      return {
        categories: [],
        categoryData:[],
        currentIndex: -1,
        currentType: "pop",
        isShow: false,
        offsetTop: 0,
        debounce: null
      }
    },
    created() {
      getCategory().then(res => {
        // console.log(res)
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

    mounted() {
      this.debounce = debounce(() => {
          this.offsetTop = this.$refs.tabControl2.$el.offsetTop
          console.log(this.offsetTop)
      }, 500)
    },

    methods: {
      /**
      * 事件响应相关的方法
      */
      selectItem(index) {
        this._getSubcategories(index)
        this.$refs.scroll.scrollToTop(0 ,0)
      },

      tabClick(index) {
        switch(index) {
          case 0: {
            this.currentType = 'pop'
            break
          }
          case 1: {
            this.currentType = 'new'
            break
          }
          case 2: {
            this.currentType = 'sell'
            break
          }
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      handleScroll(pos) {
        const posY = -pos.y
        this.isShow = posY >= (this.offsetTop - 47)
      },

      handleLoad() {
        this.debounce()
      },

      /* 
        网络请求相关的方法
      */
      _getSubcategories(index) {
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          // console.log(res)
          this.categoryData[index].subcategories = res.data
          // this.categoryData = {...this.categoryData}
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
          // this.categoryData = {...this.categoryData}
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

  .tabControl1{
    position: fixed;
    left: 100px;
    right: 0;
    top: 44px;
  }
</style>