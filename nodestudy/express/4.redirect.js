let express = require('express');
let app = express();
app.listen(8080);


app.get('/',function(req,res){
	res.setHeader('Location','http://www.baidu.com');
	res.statusCode = 200;
	res.end();
	// res.redirect('http://www.baidu.com');
});

