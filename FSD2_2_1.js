function fun(){
    d=new Date()
    a=d.toLocaleTimeString()
    // a=d.toLocaleTimeString('en-IN',{hour12:false})
    console.log(a)
}
fun()
setInterval(fun,1000)
