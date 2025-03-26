http = require("http");
server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<a href='/'>Home</a>");
  res.write("<a href='/about'>about</a>");
  if (req.url === "/") {
    res.write("<h1>Home page<h1>");
  } else if (req.url === "/about") {
    res.write("About page");
  } else {
    res.write("<h2>Page not found<h2>");
  }
  res.end();
});
server.listen(5010);
