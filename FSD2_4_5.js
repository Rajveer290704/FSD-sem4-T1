http=require('http')
server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("Hello");res.write("<h1>How are you?</h1>")
    res.end(" I am fine")})
server.listen(5006)