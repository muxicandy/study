# cookie （浏览器中）

## cookie原理
- 1、服务器向客户端发送cookie
- 2、客户端的浏览器把cookie保存
- 3、客户端向服务器发请求带上cookie
- 4、如果不设置过期时间，则表示这个cookie生命周期为浏览器会话期间，只要关闭浏览器窗口，cookie就消失了。

## 使用cookie的注意事项

- 可能被客户端篡改，使用前验证合法性
- 不要存储敏感数据，例如用户密码，账户余额
- 使用httpOnly保证安全
- 尽量减少cookie的体积（4k）
- 设置正确的domain和path,减少数据传输

## express中使用cookie

- npm install cookie-parser
- req.cookies.isVisited
- res.cookie('isVisited','1',{maxAge:20000});

# session （服务器端的，大小无限制的）

- 会话跟踪，数据存放在服务器端
- 需要借助cookie存储一个会话ID，服务器可以根据会话ID来查询出详细的session数据

## session的步骤



## session的使用

- npm install express-session
- req.session.isLogin
