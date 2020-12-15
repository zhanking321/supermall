import { debounce } from "./utils"
import BackTop from 'components/content/backTop/BackTop'
import Toast from 'components/common/toast/Toast'

export const mixin = {
    data() {
        return {
            itemImgListener: null,
            refresh: null
        }
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () => { this.refresh() }
        this.$bus.on("itemImageLoad", this.itemImgListener)
        // console.log("我是混入的")
    },
}

export const backTopMinxin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollToTop(0, 0, 500)
        },
        listenShowBackTop(pos) {
            /* 通过监听滚动判断什么时候显示回滚标志 */
            this.isShowBackTop = (-pos.y) > 1000
        }
    },
}

export const toastMixin = {
    components: {
      Toast  
    },
    data() {
        return {
            message: "",
            isShow: false
        }
    },
    methods: {
        showToast(res, duration=2000) {
            this.message = res
            this.isShow = true
            setTimeout(() => {
                this.message = ""
                this.isShow = false
            }, duration)
        }
    },
}

