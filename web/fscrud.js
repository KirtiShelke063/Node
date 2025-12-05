const fs=require('fs');
console.log(process.argv[2]);

const name=process.argv[3];
const fullName="files/"+name+".txt";
const operation=process.argv[2];

if (operation=='write')
  {
  const content=process.argv[4];
  console.log(operation,name,content);
  fs.writeFileSync(fullName,content);
}
else if(operation=='read')
  {
  const name=process.argv[3];
  let data=fs.readFileSync(fullName,"utf-8");
  console.log(data);
}
else if(operation=='update'){
  const content=process.argv[4];
  const name=process.argv[3];
  let data=fs.appendFileSync(fullName,content);
  
}
else{
  let data=fs.unlinkSync(fullName);

}

// fs.writeFileSync('files/banana.txt',"this is a fruit");
// fs.unlinkSync('files/banana.txt');

// const data=fs.readFileSync('files/apple.txt','utf-8');
// console.log(data);

// fs.appendFileSync('files/apple.txt',"\nThis is good for health");

