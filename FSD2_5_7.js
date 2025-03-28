url=require('url')
addr="http://localhost:8080/default.html?year=2025&month=March#Sir"
data=url.parse(addr,true)
year=data.query.year
if(year%4==0){
    console.log('Leap Year')
}else{
    console.log('Not leap Year')
}
