const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
  fs.readFile('web.html','utf-8',(err,data)=>{
    if(err){
      res.writeHead(500,{"Content-type":"text/plain"});
      res.write("internal server error");
      res.end();
      return;
    }
res.writeHead(500,{"Content-type":"text/html"});
    res.write(data);
    res.end();
  })
}).listen(1110);
