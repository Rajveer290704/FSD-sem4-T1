var test = { 
    "division1": {"name":["Z","B","H"]},
    "division2": {"name" :["Y","A","G"]}
    }
function fun(test){
    test1={}
    a1=test.division1.name
    a2=test.division2.name
    a=a1.concat(a2).sort()
    test1['division']=a
    console.log(test1)
}
fun(test)