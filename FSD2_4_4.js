var fs = require('fs')
var p=require('path')
ext = p.extname("D:/FSD.link.txt")
if (ext=='.txt'){
    console.log('Selected file has txt extension')
}else{
    console.log('Selected file has not txt extension')
}
