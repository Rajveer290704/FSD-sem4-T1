//Create HTTP webpage on which home page display “Home page”, student page shows “Student page” and any other page shows “Page Not found”.    (Render Response & Routing)
http=require('http')
server = http.createServer((req,res)=>{
    if(req.url === '/homepage'){
        res.write("Home Page")
    }else if(req.url === '/Studentpage'){
        res.write("Studemt Page")
    }else{
        res.write("Page not found")
    }
    res.end()})
server.listen(5007)