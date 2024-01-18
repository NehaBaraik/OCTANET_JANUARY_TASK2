

function addtask(){

    if (document.querySelector(".item").value.length==0){
       alert("Please enter a task");
    }
    else{
        
        document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML +`
       
        ${document.querySelector(".item").value}
        </span>
        <button class="delete" ><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
        document.querySelector(".item").value="";
        update();
    }

var task_del= document.querySelectorAll(".delete");
for(var i=0;i<task_del.length;i++){
    task_del[i].onclick=function(){
        this.parentNode.remove();
        update();
    }
}
}
function update(){
var count= $(".displayitem").find("*").length;
if(count==0){
  
   document.getElementById("hh").style.opacity= '0';
}
else{
    document.getElementById("hh").style.opacity= '1';
}
}
