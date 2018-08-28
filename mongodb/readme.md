# mongo的基本操作

## mac下安装mongodb

- brew install mongodb（在brew下边安装mongo，如果遇到brew更新问题,参考如下操作）
- 进到/usr/local/Cellar/mongodb/bin下，创建文件夹data(mkdir data)
- mongod --dbpath=./data
- 如果链接不上数据库，执行brew services start mongodb
- mongo进入数据库

```
替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git 
重置brew.git:
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git

重置homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git

```

## 基本操作

- use mydb //use+数据库名
- db //显示当前选定的数据库
- show dbs //查看当前数据库列表
- db.movies.insert({"name","尖峰时刻"}) //隐式创建集合
- use mydb 然后 db.dropDatabase() //先切换到要删除的数据库
- db.users.drop() //删除集合
- db.getName()/db  获得当前数据库名字
- db.person.help() 看数据库方法
- show collections看集合
- db.person.find({}) 查看本数据库所有的数据
- exit 退出

# mongoose对象模型工具

- 在项目目录下安装mongoose,npm install mongoose

- 查询 
```

Model.find({},function(err,docs){
	if (err) {
		console.log(err);
	} else {
		console.log(docs);
	}
});
```

- 创建一个文档

```
	Model.create({
    	name: 'zhuzhu',
    	age: 40,
    	email: '1132131150@qq.com'
	},function(err,doc){
		if (err) {
			console.log(err);
		} else {
			console.log(docs);
		}
	});
```

- 更新操作

```

let conditions = {name: 'yang'};
//$inc 是increntment的缩写,multi是全部更新的意思
let age = {$inc:{age: 2}};
Model.update(conditions, age,{multi: true}, function(err,doc){
	if (err) {
		console.log(err);
	} else {
		console.log(doc);
	}
});
```

- 删除操作

```

Model.remove({条件}，function(err, doc){
	if (err) {
		console.log(err);
	} else {
		console.log(doc);
	}
});
```

- 高级查询

> $gt(大于)、$lt(小于)、$lte(<=)、$gte(>=)
> $in(包含){$in:6}/{$in:[6,7]}
> $exites具有某个字段的返回结果{$exites:true}

- 游标的操作

> limit限制数量，{limit: 20}
> skip略过指定数量的{skip:4}
> sort指定排序{sort:{age:-1}},值代表排序的方向，1是生序，-1是降序
> 调exec()的时候执行

```
Model.find().sort({name:1}).skip(3).limit(3).exec(function(err,docs){
	console.log(docs);
});
```