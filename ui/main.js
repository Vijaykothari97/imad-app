

 var button = document.getElementById('submit_btn');
 
 button.onclick =  function(){
    
 var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function(){
    // Process the server response here.

    

   if(this.status===200 && this.readyState==4 )
   
   {
    var names=this.responseText;
    
     names=JSON.parse(names);
   var array=[];
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
   
   
    var elements=this.responseText;
    elements=JSON.parse(elements);
   
    var x=['lion','tiger','chetah','elephant','wolf','leopard','hyena','bear','deer','hippo'];
    var y=['parrot','sparrow','pigeon','crow','peacock','koyal','woodpecker'];
    var shirts=['10 shirts of pantaloon','10 shirts of zamkuddi','10shirts from wholesale company'];
    
   
   for(var i=0 ; i < elements.length ; i++) {
        
        
    if (elements[i] ==="animals"||elements[i]==="Animals"){
    var hy =   document.getElementById("demo1");
   hy.innerHTML=x;    
  
   }
    
 if (elements[i] ==="birds"||elements[i]==="Birds"){
    var ayy =   document.getElementById("demo1");
   ayy.innerHTML=y;  
    }     
    
     if (elements[i] ==="what is the stock of shirts?"||elements[i]==="shirts left?"){
    var vij =   document.getElementById("demo1");
   vij.innerHTML=shirts;  
    }     
    
    
    if (elements[i] ===''){
    var o =   document.getElementById("demo1");
   o.innerHTML=null;
  
    }
    }          
       
   }
       
    
    
 
};
var elementInput=document.getElementById("element");
var element=elementInput.value;
xhttp.open('GET',' http://vijaykothari97.imad.hasura-app.io/search-element?element='+element, true);
xhttp.send();
};


var button=document.getElementById("s2");
button.onclick=function(){
 var s3 = parseInt(prompt("Enter the amount"))  ; 
var samosa= s3;
var button=document.getElementById("v2");
button.onclick=function(){
var vadaPav = parseInt(prompt("Enter the amount"));
var total=samosa+ vadaPav;
var c = document.getElementById("t2");
c.innerHTML="The total bill amount is "+total;
    
};
    
};



