var http = require('http');
var fs  = require('fs')

http.createServer((req,res)=>{
	// req 请求
	req_url =decodeURI(req.url)
	
	
	if(req.url=='/'){
		req_url='/index.html'
	}
	console.log(req_url)
	fs.readFile(req_url.substr(1),(err,data)=>{
		if(err){
			// throw err
		}
		else{	
			// res 响应
			res.writeHead(200)
			
			res.write(data);
			res.end();
		}
	})

}).listen(8080)

console.log('服务器已开启！ip地址:8080')