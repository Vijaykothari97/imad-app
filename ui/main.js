console.log('Loaded!');

 
 var submit =  document.getElementById("submit_btn");  
submit.onclick = function(){
    
 var request = new XMLHttpRequest();
 request.onreadystatechange = function(){
    // Process the server response here.
if(request.readystate===XMLHttpRequest.DONE){
    

   if(request.status===200 )
   
   {
    var names=request.responseText;
     names=JSON.parse(names);
   
   var list='';
   for(var i=0;i<names.length;i++){
        list+=names[i];
        
        
    }
    
   
    
     }

  }
        
};
var nameInput=document.getElementById("name1");
var name=nameInput.value;
request.open('GET',' http://vijaykothari97.imad.hasura-app.io/submit-name', true);
request.send(null);
};