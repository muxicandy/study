let user = require('./user');
require('fs').writeFileSync('./user.json',"[]");
//重新获取json，不用缓存，require.resolve('./user')
//path.resolve当前模块的绝对路径
//require.resolve指定模块的绝对路径
delete require.cache[require.resolve('./user')];
let user1 = require('./user');//获取的第一次加载的那个内容
console.log(user1);