var pos=0;
var taskInput=document.getElementsByClassName("input");
var addTaskBtn=document.getElementsByClassName("addButton")[0];
var counterelement=document.getElementsByClassName("labels");

addTaskBtn.addEventListener("click",addTask)

window.addEventListener("load", ()=>{
     counterelement[0].style.display="none";
});

function addTask(){
	console.log("Add bookmark...");
  
    let bname=parseInt(taskInput[0].value);

    const intrvl=setInterval(function() {  counterelement[0].style.display="block"; counterelement[0].innerHTML= bname; if(bname===0){clearInterval(intrvl)} bname--}, 500);
 
 }

