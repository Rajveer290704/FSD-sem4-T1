//request based server which has ability to load one json file on home page if user ask for gallery,it will load one image ,if user ask for login page it should represent one form having field username,password,submit button For any other page display page not found
http = require("http");
fs=require('fs')
server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type": "application/json" });
        let a = {'Name':'Raj','Age':20}
        res.write(JSON.stringify(a));
    }else if(req.url==='/gallery'){
        let a = fs.readFileSync("image.jpg");
        res.writeHead(200,{"Content-Type": "image/jpg" });
        res.write(a)
    }else if(req.url==='/loginpage'){
        res.writeHead(200,{"Content-Type": "text/html" });
        res.write(`
            <form>
            <label for="un">Username</label>
            <input type="text" id="un"><br>
            <label for="un">password</label>
            <input type="password" id="un"><br>
            <label for="un">Username</label>
            <input type="submit" value="submit">
            </form>
            `)
    }else{
        res.write('Page not found')
    }
    res.end();
  });
  server.listen(6061);