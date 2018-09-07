//webpack必须采用commonjs的写法
let path = require('path');//专门处理路径的，以当前路径解析出一个相对路径
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./src/main.js',//打包的入口文件，webpack会自动查找相关的依赖进行打包
	output:{
		filename:'bundle.js', //打包后的名字
		path: path.resolve('./dist')//必须是一个绝对路径
	},
	//模块的解析规则
	// -js 匹配所有的js，用babel-loader转译，排除掉node_modules
	module:{
		rules:[
			{test: /\.js$/,use:'babel-loader',exclude:/node_modules/},
			//use时从又往左写
			{test:/\.css$/,use:['style-loader','css-loader']},
			//less-loader会自动调用less，不用加载less
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=8192'},
			//转化base64只在8192字节下转化，其他情况下输出图片
			{test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
			{test:/\.vue$/,use:'vue-loader'}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename:'login.html'//可以改名字，插入到disst目录中，产出的文件名字
		});
	]
};