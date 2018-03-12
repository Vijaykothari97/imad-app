console.log('Loaded!');
 var element = document.getElementById("he");
 element.innerHTML="CAN I SAY";
     
      var button= document.getElementById("hello");
button.onclick = function (){
   
vj1.innerHTML="holla";
};
    
 var submit=  document.getElementById("submit_btn");  
submit.onclick=function(){
    

    
var http=new XMLHttpRequest();
    request.onreadystatechange = function(){
    // Process the server response here.
if(request.readystate===DONE){
    

if(request.status===200){
     var p= document.getElementById("vj2");
    vj2.innerHTML=name;
}
}
        
    };
var nameInput=document.getElementById("name");
var name=nameInput.value;
    request.open('GET', 'http://www.example.org/some.file', true);
request.send(null);
};