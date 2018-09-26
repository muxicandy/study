let express = require('express');
let app = express();
app.listen(3000);
//ie不兼容
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
//轮播图
let axios = require('axios');
app.get('/sliders',function(req,res){
	axios.get('http://www.html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1536582568225').then(function(resData){
		res.json(resData.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
	});
});
//获取课程接口
//服务端一共24条 第一次 获取五条 下一条偏移五条
//offset偏移量
//limit每次多少条
let lessons = require('./lesson.js');
app.get('/lesson/:offset/:limit/:type',function(req,res){
	let {offset,limit,type} = req.params;
	//all react vue
	let lists = lessons;
	if (type!== 'all') {
		lists = lessons.filter((item,index)=>{
			return item.type === type;
		});
	}
	offset = parseInt(offset);
	limit = parseInt(limit);
	let newArrs = lists.slice(offset,offset+limit);
	let hasMore = offset+limit > lists.length?false:true;
	res.json({hasMore,lists:newArrs});
});