var fs = require('fs')
fs.writeFile('text.txt',"Welcome to Async World",
    function(err){
        if(err){console.log("error")}
        else{console.log("Written Succesful")
            fs.readFile('text.txt','utf-8',
                function(err,data){
                    if(err){console.log(err)}
                    else{console.log(data);console.log("Reading complete")}
                }
            )
        }})