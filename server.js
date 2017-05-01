var express=require('express')
var app=express()
app.get('/api/',function(req,res){
	var language=req.headers['accept-language'].split(',')[0]
	var software=req.headers['user-agent'].split('(')[1].split(')')[0]
	res.json({'ip':req.connection.remoteAddress,'language':language,'software':software})
})
app.listen(8080)