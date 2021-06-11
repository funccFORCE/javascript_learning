
console.log("welcome to notes app");
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addText=document.getElementById("addText");
    let notes=localStorage.getItem("notes"); //e is an event object
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
}
notesObj.push(addText.value);
localStorage.setItem("notes",JSON.stringify(notesObj));
addText.value="";
console.log(notesObj);

})
