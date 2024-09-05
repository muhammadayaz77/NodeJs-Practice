// import {createServer} from 'node:http'
// let PORT = 3000;

// let myServer = createServer((req,res) => {
//   let url = req.url;
//   if(url == '/'){
//     res.writeHead(200,{"Content-Type":"text/plain"})
//   res.end('This is home page');
//   }
//   if(url == '/about'){
//     res.writeHead(200,{"Content-Type":"text/plain"})

//     res.end('This is About page');
//     }
//   else{
//     res.writeHead(404,{"Content-Type":"text/plain"})

//     res.end('Page Not Found')
//   }
// })

// myServer.listen(PORT,() => {
//   console.log(`http://localhost:${PORT}`)
// })



// import {createServer} from 'node:http'
// let PORT = 2024;
// let server = createServer((req,res) => {
//   if(req.url == '/'){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello World');
//   }
//   else if(req.url == '/about'){
//     res.end('about page')
//   }
//   else{
//     res.writeHead(404,{"Content-Type" : "text/plain"})
//     res.end('404 Not Found')
//   }
// })

// server.listen(PORT,() => {
//   console.log(`Live at : http://localhost:${PORT}`);
// })

// Create File Sync

// import { writeFileSync } from "node:fs";
// import { readFileSync } from "node:fs";
// writeFileSync('output.txt','Hello World');

// let data = readFileSync('output.txt','utf8');

// console.log(data);

// Read File Async

// import { readFile } from "node:fs/promises";

// async function readFileAsync(){
//   try {
//     let data = await readFile('output.txt','utf8')
//     console.log(data);
//   } catch (err) {
//     console.log('Error Found : ',err)
//   }
// }

// readFileAsync();


import { writeFile } from "node:fs/promises";
import { appendFile } from "node:fs";
import { unlink } from "node:fs";
async function writeFileAsync() {
  try {
    writeFile('output1.txt','Hello World');
  } catch (err) {
    console.log(err)
  }
}
writeFileAsync();

appendFile('output.txt','\n Update successfully',(err) => {
if(err) throw err;
console.log('the data is appended')
})

unlink('output1.txt',(err) => {
  if(err) throw err;
  console.log('data deleted')
})