

 var button = document.getElementById('submit_btn');
 
 button.onclick =  function(){
    
 var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function(){
    // Process the server response here.

    

   if(this.status===200 && this.readyState==4 )
   
   {
    var names=this.responseText;
    
     names=JSON.parse(names);
   
   var list = '';
   for(var i=0 ; i < names.length ; i++) {
        list+=names[i];
        
        
    }
 var p=   document.getElementById("demo");
   p.innerHTML=list;
    
     }

  
        
};
var nameInput=document.getElementById("name");
var name=nameInput.value;
xhttp.open('GET',' http://vijaykothari97.imad.hasura-app.io/submit-name?name='+name, true);
xhttp.send();
};

 var button = document.getElementById('search_btn');
 
 button.onclick =  function(){
    
 var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function(){
    // Process the server response here.

    

   if(this.status===200 && this.readyState==4 )
   
 {
   
   
    var names=this.responseText;
    names=JSON.parse(names);
   
    var x=['lion'];
    
    
    var list = '';
   for(var i=0 ; i < names.length ; i++) {
        
        
   if (names[i] ==="animal"){
    var hy =   document.getElementById("demo1");
   hy.innerHTML=x;    
   
    }     
    
       
   } 
    
    
     
    
   
     
    
    
     }

  
        
};
var nameInput=document.getElementById("search");
var name=nameInput.value;
xhttp.open('GET',' http://vijaykothari97.imad.hasura-app.io/search-name?name='+name, true);
xhttp.send();
};
