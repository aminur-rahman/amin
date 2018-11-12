var http = require('http');
var exports=require('express');
var app=express();
var server=http.server(app);

app.get('/',function(request,response){
  response.sendFile(_dirname+'/index.html');
});
app.get('/about',function(request,response){
  response.sendFile(_dirname+'/about.html');
});

/*var fs =require('fs');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('node.html',function(err,data){
       if(err){
           return console.log("File read error")
       } 
       res.end(data);
    })
    //res.end("Hello World\n");
  });*/
  server.listen(process.env.PORT ||3000 , process.env.IP, function(){
    console.log('Server running');
  });
