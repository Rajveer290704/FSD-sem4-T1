url=require('url')
http=require('http')
http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    data=url.parse(req.url,true).query
    res.write(data.year)
    res.end()
}).listen(5008)