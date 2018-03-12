console.log('Loaded!');
 var element = document.getElementById("he");
 element.innerHTML="CAN I SAY";
     
      var button= document.getElementById("hello");
button.onclick = function (){
   
vj1.innerHTML="holla";
};
    
 var submit =  document.getElementById("submit_btn");  
submit.onclick = function(){
    
 var request = new XMLHttpRequest();
 request.onreadystatechange = function(){
    // Process the server response here.
if(request.readystate===XMLHttpRequest.DONE){
    

   if(request.status===200)
   
   {
    var ox='name';
    
    
     var h3= document.getElementById("vj2");  
    h3.innerHTML="the name is "+ox;
}

}
        
    };
var nameInput=document.getElementById("name");
var name=nameInput.value;
 request.open('GET',' http://vijaykothari97.imad.hasura-app.io/submit-name?name=' +name, true);
request.send(null);
};