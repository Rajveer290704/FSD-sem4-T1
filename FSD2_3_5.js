//Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.
var fs = require('fs')
fs.writeFile('sort.txt','0 1 -9 20 33 -44 50',
    function(err){
        if(err){console.log(e)}
        else{
            console.log("Written Successful")
            fs.readFile('sort.txt','utf-8',
                function(err,data){
                    if(err){console.log(err)}
                    else{
                        data=data.split(" ")
                        console.log(data.sort())
                    }
                }
            )
        }
    }
)
