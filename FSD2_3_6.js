//Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console.
var fs = require('fs')
fs.writeFile('student.txt','{Raj:20}',
    function(err){
        if(err){console.log(err)}
        else{
            fs.readFile('student.txt','utf-8',
            function(err,data){
                if(err){console.log(err)}
                else{
                    console.log(data)
                }
            }
        )}
    }
)