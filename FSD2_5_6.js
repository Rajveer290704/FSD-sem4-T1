url=require('url')
addr="http://localhost:8080/default.html?Name='Raj&Age=50#Sir"
data=url.parse(addr,true)
console.log(data)
console.log(data.pathname)
console.log(data.query)
console.log(data.host)