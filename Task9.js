const student = [
    {name: "ABC", height: 5.7},
    {name: "PQR", height: 6.0},
    {name: "XYZ", height: 6.2}
    ]
function fun(student){
    student.sort((a,b)=>b.height-a.height)
    console.log(student)
}
fun(student)