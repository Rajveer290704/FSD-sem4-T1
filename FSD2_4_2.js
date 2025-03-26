//Write node.js script to create file named “temp.txt”. Now, check if available physical memory of the system is greater than 1 GB then print message “Sufficient Memory” in the file, else print message “Low Memory” in file.
var fs = require('fs')
var os=require('os')
a=os.freemem()
a=a/(1024*3)
if (a <1){
    fs.writeFileSync('temp.txt','low Memory')
}else{
    fs.writeFileSync('temp.txt','Sufficient Memory')
}
