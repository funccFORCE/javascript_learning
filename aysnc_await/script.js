async function aditi(){

    console.log("inside function") 
    const response = await fetch('https://api.github.com/users');
    console.log("before response")
    const users=await response.json();
    console.log("users resolevd")
    return users;
}
console.log("before calling function")
let a=aditi();
console.log("after calling function")
console.log(a);
a.then(data=>console.log(data))