let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/person');
//端口号，不要写了，默认，写的话就默认的27017
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('aa链接成功了');
});

//数据库的结构定义，定义数据的名字和类型
let PersomSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String
});

//定义一个数据库操作模型
let PersonModel = mongoose.model('person',PersomSchema);

//创建实体，可以操作数据库
let PersonEntity = new PersonModel({
	name: 'yangyang',
	age: 18,
	email: '975841400@qq.com'
});

//把当前的实体绑定到数据库中
PersonEntity.save(function(err,doc){
	if (err) {
		console.log(err);
	} else {
		console.log(doc);
	}
});

PersonModel.find({},function(err,doc){
	if (err) {
		console.log(err);
	} else {
		console.log(doc.length);
	}
});

PersonModel.update({name: 'yangyang'},{$inc:{age:1}},{multi: true},function(err,doc){
	if(err){
	 	console.log(err);
	} else {
		console.log(doc);
	}
});

PersonModel.remove({age: 18}, function(err, doc){
	if(err){
	 	console.log(err);
	} else {
		console.log(doc);
	}
});