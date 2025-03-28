//write a js to load a message after 10s
http = require("http");
server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/html" });
    res.write(`
        <p id='demo'></p>
        <script>
            setTimeout(function(){
                document.getElementById('demo').innerText='Hello'},5000)
        </script>`)
    res.end();
  });
  server.listen(5000);