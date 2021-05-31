console.log("hello this is fetchAPI");
let byBtn=document.getElementById("myBtn");

let content = document.getElementById("content");

function getData(){
    console.log("started getdata")
    url="aditi.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return Response.text();
    }).then((data)=>{
        console.log("inside first then")
        console.log(data);
    })
}

console.log("before get data")
getData()
console.log("after running get data")