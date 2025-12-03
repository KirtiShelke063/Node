const http=require("http");

http.createServer((req,res)=>{

    console.log(req.method);
    if(req.url==="/"){
      res.write("<h1>Kirti here</h1>");
    }
    else if(req.url==="/login"){
      res.write("<h1>Login Page</h1>");
    }else{
      res.write("<h1>404 Page Not Found</h1>");
    }
  
    res.end("hello");

}).listen(5000);