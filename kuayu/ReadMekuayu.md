## 同源策略
协议 域名 端口都一致表示 同域

## 为什么浏览器不支持跨域
cookie localStorage 
DOM元素也有同源策略 iframe
ajax 也不支持跨域

## 实现跨域
- jsonp,只能发送get请求，不支持post put delete ,不安全 xss攻击
- cors
- postMessage
- document.domain
- window.name
- location.hash
- http-proxy
- nginx
- websocket