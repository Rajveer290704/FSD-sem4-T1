http = require("http");
fs=require('fs')
server = http.createServer((req, res) => {
    let a = fs.readFileSync("image.jpg");
    res.writeHead(200,{"Content-Type": "image/jpg" });
    res.write(a)
    res.end();
  });
  server.listen(6060);