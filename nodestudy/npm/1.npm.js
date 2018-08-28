//第三方模块要通过npm来进行安装node pacakge manager
//全局安装-g（只能在命令行里使用）npm root -g不会自动加入到奶环境变量中，
//nrm registry源
//npm install nrm -g 安装
//npm uninstall nrm -g卸载nrm
//nrm test测试链接时间
//nrm ls显示源
//nrm use xxx源的名字
//http-server
//npm install http-server -g
//http-server
//http-server -p 3000在某个路径下启动服务
//本地安装，安装之前需要初始化，记录安装依赖的
let str="jiayou";
module.exports = str;
//package.json中，可以生成一些字符串，scripts可以配置一些字符串
//开发依赖和项目依赖
//项目依赖：
//1、开发时使用，上线还需要
//npm install jquery
//开发依赖
//1、开发时使用，线上不使用
//npm install less --save-dev
//安装全部依赖，npm install
//yarn安装，有缓存，速度比npm快一些=cnpm
//npm install -g yarn
//yarn init
//yarn add 包
//yarn add 包 --dev
//yarn remove
//想发包，先回到国外nrm use npm,包名不能和已有的包一致，入口文件，做整合用的
//注册用户，npm addUser