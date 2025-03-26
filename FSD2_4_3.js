//Write node.js script to create a folder named “AA” at temp folder. Also, create file named “temp1.txt” inside “AA” folder. Now, check if working on 32 bit plateform then print You are working on windows 32 bit else print You are working on windows 64 bit.
var fs = require('fs')
var os=require('os')
temp =os.tmpdir()
// fs.mkdirSync(temp + '/AA')
platform = os.platform()
if (platform == 'win32'){
    fs.writeFileSync(temp+'/AA/temp.txt','You are working on windows 32')
}else{
    fs.writeFileSync(temp+'/AA/temp.txt','You are working on windows 64')
}
console.log(temp)