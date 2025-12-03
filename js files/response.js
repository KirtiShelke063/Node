const http = require('http');

const age=29;
const server=http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.write(`
    <html>
      <head><title>My First Page</title></head>
      <body><h1>Hello from my Node.js Server!</h1>
      <h2>`+age+`</h2>
      <h2>`+new Date()+`</h2>
      </body>
    </html>
  `);
  res.end("hello world");
  process.exit();
})
server.listen(4800);