//write a js code to print a query string of url on console as well as on file using es6 callback
var fs = require('fs')
url=require('url')
http=require('http')
addr="http://localhost:8080/d.html?year=2025&month=March#Sir"
data=url.parse(addr,true).query
console.log(data)
fs.writeFile('text.txt',JSON.stringify(data),
    function(err){
        if(err){console.log("error")}
        else{console.log("Written Succesful")
        }})