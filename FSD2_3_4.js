//write your name and roll no in student.txt and append data  having email in same file and then read that particular data using async mechanism in ES6 form 
var fs = require('fs')
fs.writeFile('student.txt',"Rajveer 36",
    function(err){
        if(err){console.log("error")}
        else{console.log("Written Succesful")
            fs.appendFile('student.txt',' Raj@gmail.com',
            function(err){
                if(err){console.log("error")}
                else{console.log("Append Succesful")
                    fs.readFile('student.txt','utf-8',
                        function(err,data){
                            if(err){console.log(err)}
                            else{console.log(data);console.log("Reading complete")}
                        }
                    )
                }
            }
            )
        }})
        