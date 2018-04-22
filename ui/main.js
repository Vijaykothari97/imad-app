

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
        
   if (names[i] ==='*'){
    var f =   document.getElementById("demo");
   f.innerHTML=null;
   }
  
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
   
   
    var elements=this.responseText;
    elements=JSON.parse(elements);
   
    var x=['lion',
    'tiger'];
    var m=['chetah'];
    
   
   for(var i=0 ; i < elements.length ; i++) {
        
        
   if (elements[i] ==="animal"){
    var hy =   document.getElementById("demo1");
   hy.innerHTML=x+m;    
  
   }
    
    if (elements[i] ==="*"){
    var ayy =   document.getElementById("demo1");
   ayy.innerHTML=null;  
    }     
   
  
   
    }          
       
   }
       
    
    
 
};
var elementInput=document.getElementById("element");
var element=elementInput.value;
xhttp.open('GET',' http://vijaykothari97.imad.hasura-app.io/search-element?element='+element, true);
xhttp.send();
};
