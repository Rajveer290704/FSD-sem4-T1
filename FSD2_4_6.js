http=require('http')
obj={'name':'Rajveer'}
server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    res.write(JSON.stringify(obj))
    res.end()})
server.listen(5006)