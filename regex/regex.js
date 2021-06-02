console.log("this is regex or regular expresions");

let reg = /aditi/g;
//this is regular expression//this is regular expression. the g is global flag.

 reg = /aditi/i; //i is case insensitive

console.log(reg.source);
console.log(reg);
console.log(reg.source);

let s = "this is great day today with aditi and Aditi";
//function to match expression
//1.exec()- this function will return an array for match or null for no match

let result = reg.exec(s);
console.log(result);
//we can also use multiple exec with global flag

//flag- g-it means it will run for the whole line otherwise it returned only the first work when found


//2. test()-return true or false if it is a regular expression
let result2 = reg.test(s); //this will only print  true or false
console.log(result2);


// 3. match()- it is used on string. it will return an array of results or null
// let result3=reg.match(s); //this is wrong
let result3 = s.match(reg);
console.log(result3);// corect

//4.search()- return index of first match else -1. it has same syntax as match()

let result4=s.search(reg);
console.log(result4);

//5.replace()-replace strings with all the replacements

let result5=s.replace(reg,'shubham');
console.log(result5);