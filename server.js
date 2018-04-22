var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
 
 
 
var names = [];
app.get('/submit-name', function (req, res) {
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

var elements = [];
app.get('/search-element', function (req, res) {
  var name=req.query.element;
  names.push(element);
  res.send(JSON.stringify(elements));
});
 

var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+ 1;
  res.send(counter.toString());
});




 
 var names=[];
app.get('/:name', function (req, res) {
  var name=req.params.name;
 names.push(name);
  res.send(JSON.stringify(name));
}); 
 
app.get('/article', function (req, res) {
   res.send(createTemplate(article));
});
  

app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/articleone', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
}); 
  
  
var article={
     title: `Vijay`,
    
     heading:  `Vacation Spot`,
     content:  ` <p>
            A city-size shrine to the Renaissance, Florence offers frescoes, sculptures, churches, palaces, and other monuments from the richest cultural flowering the world has known. Names from its dazzling historical pastDante, Michelangelo, Galileo, Machiavelliare some of the most resonant of the medieval age.
            
        </p>`
 };
function createTemplate (data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var createHtml=`<!doctype html>
<html>
  <head>
      
      
      <title>${title}</title>
  </head>
  <body>
    <h1>${heading}</h1>
    <img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-2/explorer.jpeg">
    
    <div class="man">
        <h2>Florence italy</h2>
        
            ${content}
    </div>
   </body>
</html> `; 
return createHtml;
}


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
