const sub =
{
"FSD": [
{
"Topic": "HTML",
"course": "Beginer",
"content": ["tags", "table", "form"],
},
{
"Topic": "CSS",
"course": "Beginer",
"content": ["tags", "table", "form"]
}
]};
for (x of sub.FSD){
    console.log(x.Topic);
    console.log(x.course);
    console.log(x.content);
}