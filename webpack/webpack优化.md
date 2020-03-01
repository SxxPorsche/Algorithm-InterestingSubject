### 1. 减小打包的整体体积

#### 1.1 代码压缩
使用 webpack 中的 optimization.minimizer 来对代码进行压缩优化
```
  minimize: true,
  minimizer: [
    new TerserWebpackPlugin({
      terserOptions: {
        warnings: false,
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        parse: {
          ecma: 8,
        },
        mangle: true,
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: true,
    }),
  ],
```
具体做法：
* 去除多余字符: 空格，换行及注释
* 压缩变量名：变量名，函数名及属性名
去除多余字符 和 缩短变量的命名 需要 AST 支持，不至于在作用域中造成命名冲突；
* 更简单的表达：合并声明以及布尔值简化
* 那压缩代码的过程：code -> AST -> (transform)一颗更小的AST -> code


#### 1.2 移除不适应的模块
    如： import loadsh from 'loadsh'， 但却未使用loadsh
#### 1.3 选择可替代的体积较小的模块
如moment优化方法：  
1.3.1 用dayjs替换moment
1.3.2 通过ContextReplacementPlugin插件来挑选我们需要的文件
```
// moment 只引入 zh-cn 语言包
plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
]
```
1.3.3 只引入一个版本
    有时候通过依赖分析会发现项目里打包了两份第三方库，一份是es module版的，另一份则是umd版的。
    如moment通过import 'moment'导入的是es module版的，locale文件中却会用相对路径导入umd版的。
```
// 这时我们可以通过配置别名将库指向同一个版本。
resolve: {
    alias: {
        'moment$': path.resolve('node_modules/moment/moment'),
    },
}
```
#### 1.4 按需引入模块
如 lodash， antd， echarts
使用 babel-plugin-import 来进行按需加载

### 2. Code Splitting: 按需加载，优化页面首次加载体积
通过 Code Splitting 可以只加载当前所需要的核心资源：

1. 如果你处在首页，并且首页中有占用资源过重的图表，需要对图表懒加载，否则它会大幅拖垮应用的首次渲染，加大白屏时间
2. 如果你处在首页，你无需加载当前不可见屏幕下方的复杂组件
3. 如果你处在页面 A，你没有必要加载页面 B 的资源

实现方法：
* 使用 import() 动态加载模块
* 使用 React.lazy() 动态加载组件
* 使用 lodable-component 动态加载路由，组件或者模块
* 针对性缓存

### 3. Bundle Splitting
除了资源体积上的优化，另一个大的优化就是缓存。单页应用有一个最好的方面，就是所有资源都是带有指纹信息的，这意味着所有的资源都是能够设置永久缓存的。

我们现在需要做到的是：当修改文件后，造成最小范围的缓存失效，这样便能够*更充分的利用缓存*，减小宽带，减小服务器费用。

对资源进行分层次缓存的打包方案:
1. webpack-runtime: 应用中的 webpack 的版本比较稳定，分离出来，保证长久的永久缓存
2. react-runtime: react 的版本更新频次也较低
3. vundor: 常用的第三方模块打包在一起，如 lodash，classnames 基本上每个页面都会引用到，但是它们的更新频率会更高一些

随着 http2 的发展，特别是多路复用，初始页面的静态资源不受资源数量的影响。
因此为了更好的缓存效果以及按需加载，也有很多方案建议把所有的第三方模块进行单模块打包。
在 webpack 中，使用 splitChunks.cacheGroups

```
{
  splitChunks: {
    cacheGroups: {
      react: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: 'react',
        chunks: 'all'
      },
      vendor: {

      }
    }
  },
  runtimeChunk: {
    name: entrypoint => `runtime-${entrypoint.name}`,
  },
}
```