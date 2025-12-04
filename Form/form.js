const http = require('http');
const fs=require('fs');

// http.createServer((req,res)=>{
//   res.writeHead(200,{"Content-type":"text/html"})
//   console.log(req.url);
//   if(req.url=='/'){
//     res.write(`
//       <form action="/submit" method="post">
//         <input type="text" placeholder='enter name' name="name" />
//         <input type="text" placeholder='enter email' name="email" />
//         <button>Submit</button>
//       </form>
//       `);
//     }else if(req.url=='/submit' ){
//       res.write("<h1>Form Submitted</h1>");
//     res.end();
//     }
// }).listen(330);

//method 2

http.createServer((req,res)=>{
  fs.readFile('form.html','utf-8',(err,data)=>{
  
    if(err){
        res.writeHead(500,{"Content-type":"text/plain"})
      res.end("internal server error");
      return

    }
    res.writeHead(200,{"Content-type":"text/html"})
    if(req.url=='/'){
      res.write(data);
    }else if(req.url=='/submit'){
      res.write("<h1>Form Submitted</h1>");
    }
    res.end();
  })


}).listen(330)