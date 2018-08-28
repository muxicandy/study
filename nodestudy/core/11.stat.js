let fs = require('fs');
fs.stat('./1.txt',function(err,stats){
	if(err){
		// 文件不存在
	}
	console.log(stats.isFile());//判断是不是文件
	console.log(stats.isDirectory());//判断是不是文件夹
	console.log(err,stats);
});
// fs.mkdir('a/b',function(err){
// 	console.log(err);
// });
function makep(url,cb) {//插入排序
	let urlArr = url.split('/');
	let index = 0;
	function make(p){
		if(urlArr.length<index) return;
		fs.stat(p,function(err){
			if(err){
				fs.mkdir(p,function(err){
					if(err)console.log(err);
					make(urlArr.slice(0,++index+1).join('/'));
				});
			} else {
				make(urlArr.slice(0,++index+1).join('/'));
			}
		});
	}
	make(urlArr[index]);
}
makep('e/f/g/h', function(err){
	console.log('chuangjianchenggong');
});