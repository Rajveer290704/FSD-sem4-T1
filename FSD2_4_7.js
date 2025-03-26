http=require('http')
server = http.createServer((req,res)=>{
    res.write(req.url)
    res.end("url fetched")})
server.listen(5007)