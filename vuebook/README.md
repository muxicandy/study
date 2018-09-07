# first-vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 模块
- node模块的规范commonjs（模块特指js文件）
- cmd seajs amd require
- umd 为了做兼容处理的
- esmodule 
	- 如果定义模块（一个js就是一个模块）
	- 如何导出模块（export）
	- 如果使用模块 (import)

## 先下载webpack

```
npm init -y
npm install webpack(本地安装)
```

> 安装webpack或者less最好不要安装全局的，否则可能导致webpack的版本差异
- 在package.json中配置一个脚本，这个脚本用的命令是webpack，会在当前的node_modules下找bin对应的webpack名字让其执行，执行的就是bin/webpack.js,webpack.js需要当前目录下有个名字叫webpack.config.js文件，我们通过npm run dev 执行的目录是当前文件的目录，所以会去当前目录下查找

## babel转译es6->es5
- 安装babel
```
npm install babel-core --save-dev
npm install babel-loader --save-dev
```
## babel-preset-es2015
- 让翻译官拥有解析es5语法的功能
```
npm install babel-preset-es2015 --save-dev
```

## babel-preset-stage-0(最大范围)
```
npm install babel-preset-stage-0 --save-dev
```

## 解析样式
- css-loader将css解析成模块，将解析的内容插入到style标签内（style-loader）
```
npm install css-loader style-loader --save-dev
```
## less是一门css预处理语言，(sass,stylus)
- less-loader less css-loader style-loader
- sass-loader
- stylus-loader
```
npm install less-loader style-loader --save-dev
```

## 解析图片（在js中引入图片需要import,或者引入一个线上地址）
- file-loader url-loader
```
npm install file-loader url-loader --save-dev
import page from './2.jpg';//page就是打包后图片的路径
let img = new image();
img.src = page;
document.body.appendChild(img);
```
## 需要解析html插件
- 插件的作用是：以我们自己的html为模版将打包后的结果，自动引入到html中,产出到dist目录下
```
npm install html-webpack-plugin --save-dev
```

## webpack-dev-server
- 这里面内置了服务，可以帮我们启动一个端口号，当代码更新时，可以自动打包（内存中打包），代码有变化就重新执行
```
npm install webpack-dev-server --save-dev
```

## 安装vue-loader vue-template-compiler
- vue-loader解析.vue文件的，vue会自动解析vue-template-compiler
- vue-template-compiler用来解析vue模版的

## 项目用到less
```
npm install less less-loader axios vuex bootstrap
```
- mock数据接口
- base是基础组件
- components 页面级组件

## 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加api方法实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件需要用这些数据，在调用这个组件的父级组件中使用这个方法，将数据传给组件
- 写一个基础组件
	- 1.创建一个.vue文件
	- 2.在需要使用这个组件的父级中引用这个组件
	- 3.在组件中注册
	- 4.以标签的形式引入

## 路由元信息 meta:{keepActive:true}

## 下拉加载
- 默认每次5条，前端告诉后台要从第几条开始给我
- /page?offset=5
- 后台返回时，还要告诉前端是否有更多的数据，hasMore

## 代码分割 codding split