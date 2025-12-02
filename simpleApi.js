const http=require("http");

const userData=[
{
  name:"kirti",
  age:21,
  email:"kirti@gmail.com",
},
{
  name:"jungkook",
  age:28,
  email:"jk@gmail.com",
},
{
  name:"taehyung",
  age:30,
  email:"V@gmail.com",
},
{
  name:"taehyung",
  age:30,
  email:"V@gmail.com",
}
]
http.createServer((req,res)=>{
  res.setHeader("Content-Type","application/json");
  res.write(JSON.stringify(userData,null,2));
  res.end();
  res
}).listen(500);