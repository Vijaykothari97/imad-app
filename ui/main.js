console.log('Loaded!');

 
 var submit =  document.getElementById("submit_btn");  
submit.onclick = function(){
    
 var request = new XMLHttpRequest();
 request.onreadystatechange = function(){
    // Process the server response here.
if(request.readystate===XMLHttpRequest.DONE){
    

   if(request.status===200 )
   
   {
    
    
    
    var element= document.getElementById("demo");
    
    element.innerHTML=this. request.responseText.tostring();
    
}

}
        
    };
var nameInput=document.getElementById("name1");
var name=nameInput.value;
request.open('GET',' http://vijaykothari97.imad.hasura-app.io/submit-name?name='+name, true);
request.send(null);
};