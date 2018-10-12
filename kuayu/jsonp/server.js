let express = require('express');
let app = express();

app.get('/say',function(req, res) {
	let {wd, cb} = req.query;
	console.log(wd);//loveyou
	console.log(cb);//show
	res.end(`${cb}('loveyoutoo')`);
});
app.listen(3000);