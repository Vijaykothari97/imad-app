

 var vijay = document.getElementById("submit_btn");
 
 vijay.onclick =  function(){
    
 var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function(){
    // Process the server response here.

    

   if(this.status===200 && this.readyState==4 )
   
   {
    var names=this.responseText;
    
     names=JSON.parse(names);
   
   var list = '';
   for(var i=0 ; i < names.length ; i++) {
        list+='<li>'+names[i]+'</li>';
        
        
    }
 var ul=   document.getElementById("demo");
   ul.innerHTML=list;
    
     }

  
        
};
var nameInput=document.getElementById("name");
var name=nameInput.value;
request.open('GET',' http://vijaykothari97.imad.hasura-app.io/submit-name?name='+name, true);
request.send();
};