import babel from 'rollup-plugin-babel'
// rollup默认可以导出一个对象，作为打包的配置文件
export default {
  input: './src/index.js', // 入口
  output: {
    file: './dist/vue.js',  // 出口
    name: 'Vue',
    format: 'umd',  // esm es6模块 commonjs模块 iife自执行函数 umd[commonjs amd]统一模块规范(它不兼容es6)
    sourcemap: true, // 希望可以调试源代码
  },
  // 所有的插件都是函数
  plugins: [
    babel({
      exclude: 'node_modules/**' // 排除node_modules所有文件
    })
  ]
}

// 为什么vue2只能支持ie9以上，因为Object.defineProperty不支持低版本的
// proxy是es6的，也没有替代方案