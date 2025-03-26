var fs = require('fs')
data = {'details':[{'fname':'Rajveer'},{'lname':'Rajpurohit'}]}
console.log(data)
d = JSON.stringify(data)
console.log(d)
fs.writeFileSync('user.txt',d)
de=fs.readFileSync('user.txt','utf-8')
detail=JSON.parse(de)
console.log('My name is ' + detail.details[0].fname+" "+detail.details[1].lname)