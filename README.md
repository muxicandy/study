# express小记

## express搭建服务
```

let express = require('express');
let app = express();
app.listen(8080);
```

## express路由
- 必须method和path全部匹配上执行对应的callback

```
app[method](path,function(){});
app.all('*',function(){});
```

## 路径参数路由
- 将匹配到的结果生成一个对象放到req.params上

```
app.get('/user/:id/:name');
```

## req上的属性

```

req.params路径参数
req.url整个路径
req.path pathname路径
req.headers 请求头
req.method 请求的方法
req.query 获取请求的参数 问号后面的参数
```

## middleWare	
- 中间件的作用
	- 处理公共逻辑，扩展req，res
	- 可以决定是否继续执行
	- 开头匹配到就会执行中间件
	- 错误中间件，在页面的最后，参数是4个，第一个参数是错误

## res新增的方法
- res.json()
- res.sendFile()决定路径 path.join/path.resolve
- res.sendStatus();
- res.send();

## 用户管理模块
- 登陆 /login
- 注册 /reg

## 文章管理模块
- 发表文章 /post
- 删除文章 /delete

## 路由拆分

```

let express = require('express');
let router = express.Router();
router.get('/login',fn);
app.use('user',router);
```

## bodyParser
```
app.use(bodyParser.json());//解析json
app.use(bodyParser.urlencoded({extended:true}));//true表示用express自带的解析器解析
```

## ejs(前后端分离不适用)
```

app.set('view engine','html');//配置默认后缀名
app.set('views','static');//更改模版路径
app.engine('html',require('ejs').__express);//告诉他页面上所有的render方法的html，都用ejs渲染
res.render('index',渲染的数据);
```
-ejs用法

```
<%include header.ejs%>
<h1><%=username%></h1>
<p><%=password%></p>
<%arr.forEach((item)=>{%>
	<li><%=item+1%></li>
<%})%>
<%for(var i = 0; i< arr.length;i++){%>
	<li><%=arr[i]%></li>
<%}%>
<%=html%>
<%-html%>
```

## 静态服务中间件
```
app.use(express.static('文件夹'))
```

## 重定向

```

res.redirect('路径');
```

## Curl执行GET/POST/PUT/DELETE操作

```

curl -X PUT www.baidu.com
curl -X DELETE www.baidu.com
curl -X POST www.baidu.com
curl -X GET www.baidu.com
```