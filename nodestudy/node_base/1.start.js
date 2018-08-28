let a = 1;//每个文件都有局部作用域，不会将代码挂在在global中（闭包）
console.log(global.a);
//全剧变量：在所有模块中都可以不声明直接使用global
console.log(global);
//console.warm/error/info/log/time/timeEnd
//process进程 设置环境变量
////buffer缓存区
///clearIMMEDIATE setimmediate
//clertimeout
console.time('start');//打印时差
for(let i = 0; i < 100; i++){}
console.timeEnd('start');