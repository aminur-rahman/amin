var http = require('http');
var exports=require('express');
var app=express();
var server=http.server(app);
var bodyParser=require('body-parser');
var mongo=require('mongobd');
var bd;
var bd_url="mongobd://"+process.env.IP+":27017"
mongo.MongoClient.connect(bd-url,{useNewIparser:true},function(err,client){
  if(err){
    console.log('Could not connect to mongobd.');
  }
  else{
    bd=client.bd('node-cw9');
  }
});

var save= function (form-data){
  bd.createCollection('articles',function(err,collection){
    
  });
var collection=bd.collection('article');
collection.save(from_data);
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(request,response){
  response.sendFile(_dirname+'/index.html');
});
app.get('/about',function(request,response){
  response.sendFile(_dirname+'/about.html');
});
app.get('/new-article',funtion(request,response){
  response.sendFile(_dirname+'/form.html');
});
var article=[];
app.post('/article/create',funtion(request,response){
  console.log(request.body);
  if(!request.body.title){
    return response.status(400).json({error:"Please add a title"});
  }
  article.push(request.body);
  response.status('200').json({message:"Article Successful"});
});
app.get('article/list',funtion(request,response){
  response.status('200').json({article:"Article Successful"})
});

 app.get('/article/:articleID',funtion(request,responce){
   return response.status(200).json({articles:article});
   
 article.push({title:"test article 1 ",content:'content',})
 article.push({title:"test article 2 ",content:'content',})
 
 app.get('/article/:articleID',funtion(request,responce){
   response.render('../article.ejs',{
   
     article:article[request.parans.articleID]
   })
 });

server.listen(process.env.PORT ||3000,process.env.IP,function({
  console.log('Server running');
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
    app.get('/article/:articleID',funtion(request,responce){
   return response.status(200).json({articles:article});
   
 article.push({title:"test article 1 ",content:'content',})
 article.push({title:"test article 2 ",content:'content',})
 
 app.get('/article/:articleID',funtion(request,responce){
   response.render('../article.ejs',{
   
     article:article[request.parans.articleID]
   })
 });
  server.listen(process.env.PORT ||3000 , process.env.IP, function(){
    console.log('Server running');
  });
