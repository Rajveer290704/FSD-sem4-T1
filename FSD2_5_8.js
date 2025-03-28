url=require('url')
http=require('http')
addr="http://localhost:8080/d.html?year=2025&month=March#Sir"
data=url.parse(addr,true).query
http.createServer((req, res) => {
    res.write(data.year+" "+data.month)
    res.end()
}).listen(5007)