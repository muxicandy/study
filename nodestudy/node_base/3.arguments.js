


//exports require module __dirnamee __filename
//模块化 低耦合 高内聚，方便维护，防止代码冲突（命名冲突）
//（闭包）单例模式（不能保证一定不冲突，导致调用过长）
//cmd seajs就近依赖 amd (浏览器端的模块化)依赖前置 requirejs
//node基于commonjs靠的是文件的读写，node天生自带模块化
//1、定义如何创建一个模块，一个js文件就是一个模块
//2、如何使用一个模块，require一个文件
//3、如何导出一个模块 ，module.exports/exports
//exports