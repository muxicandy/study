//base64 进制转化
let buff = Buffer.from('住');
//把一个汉字的24位，转化成4个字节，每个字节就6位，不足的补0
console.log(buff);
//把16转换成2进制 toString()
console.log((0xe7).toString(2));
//将这些值转化成10进制，去可见编码中取值，parseInt