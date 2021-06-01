console.log("hello this is fetchAPI");
let byBtn=document.getElementById("myBtn");

let content = document.getElementById("content");

//getData in fetchAPI
function getData(){
    console.log("starting getdata")
    url ="https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("inside first then")
        return response.text();
    }).then((data)=>{
        console.log("inside second then")
        console.log(data)
    })


}

//postDta in fetchAPI

function postData() {
    
    url = "https://api.github.com/users";
    
    params={
        method:'post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data)
    })


}

console.log("before get data")
getData()
console.log("after running get data")
