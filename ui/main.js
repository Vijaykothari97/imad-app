console.log('Loaded!');
 var element = document.getElementById("he");
 element.innerHTML="CAN I SAY";
     
      var button= document.getElementById("hello");
button.onclick = function (){
   
vj1.innerHTML="holla";
};
    
 var submit =  document.getElementById("submit_btn");  
submit.onclick=function(){
    

    
 var http = new XMLHttpRequest();
 request.onreadystatechange = function(){
    // Process the server response here.
if(request.readystate===DONE){
    

   if(request.status===200)
   
   {
    var ox=name;
    
    
     var boo= document.getElementById("vj2");  
    vj2.innerHTML="the name is "+ox;
}

}
        
    };
var man=document.getElementById("name");
var name=man;
 request.open('GET', 'vijaykothari97.imad.hasura-app.io/:name', true);
request.send(null);
};