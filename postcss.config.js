module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,  // 视窗的宽度，对应设计稿的宽度
      viewportHeight: 667, // 视窗的高度，对应设计稿的高度
      unitPrecision: 5,  // 指定px转换为视窗单位值的小数位数
      viewportUnit: "vw",  // 指定需要转换成的视窗单位
      selectorBlackList: ['ignore', 'tab-bar', 'tabbar-item'], // 指定不需要转换的类
      minPixelValue: 1,  // 小于或等于1px不转为视窗单位
      mediaQuery: false,  //允许在媒体查询中转换px
      exclude: [/TabBar/] // 必须是正则表达式，用于匹配文件
    }
  }
}
