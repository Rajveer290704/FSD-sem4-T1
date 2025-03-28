http = require("http");
server = http.createServer((req, res) => {
  var a = { Name: "Raj", age: 30 };
  res.writeHead(200,{"Content-Type": "application/json" });
  res.write(JSON.stringify(a));
  res.end();
});
server.listen(3008);
