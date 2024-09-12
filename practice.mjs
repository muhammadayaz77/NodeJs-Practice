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


// import { writeFile } from "node:fs/promises";
// import { appendFile } from "node:fs";
// import { unlink } from "node:fs";
// async function writeFileAsync() {
//   try {
//     writeFile('output1.txt','Hello World');
//   } catch (err) {
//     console.log(err)
//   }
// }
// writeFileAsync();

// appendFile('output.txt','\n Update successfully',(err) => {
// if(err) throw err;
// console.log('the data is appended')
// })

// unlink('output1.txt',(err) => {
//   if(err) throw err;
//   console.log('data deleted')
// })

// import {createServer} from 'node:http'
// let PORT = 3000;
// let server = createServer((req,res) => {
//   let url = req.url;
//   if(url == '/')
//   {
//     res.end(('hello World'));
//   }else if(url == '/about'){
//     res.end('About Page');
//   }
//   else{
//     res.writeHead(404,{"Content-Type" : "text/plain"});
//     res.end('404 Page Not Found');
//   }
// })
// server.listen(PORT,() => {
//   console.log(`http://localhost:${PORT}/`)
// })

// import { writeFileSync } from 'node:fs'
// import { readFileSync } from 'node:fs';
// writeFileSync('output1.txt','Hello');

// let data = readFileSync('output1.txt','utf8');
// console.log(data)

// import {writeFile} from 'node:fs/promises';
// import { readFile } from 'node:fs/promises';
// import { appendFile } from 'node:fs/promises';
// import { unlink } from 'node:fs/promises';
// async function  writeFileAsync() {
//   try {
//     await writeFile('output3.txt','Hello World3')
//   } catch (error) {
//     console.log(error)
//   } 
// }
// writeFileAsync();

// async function readFileAsync() {
//   try {
//     let data = await readFile('output3.txt','utf8');
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
  
// }
// readFileAsync();

// async function appendedFileAsync() {
//   try {
//     await appendFile('output3.txt','\n update here');
//   } catch (error) {
//     console.log(error)
//   }
  
// }

// appendedFileAsync();

// unlink('output1.txt')


// import { createServer } from "node:http";


// let server = createServer((req,res) => {
//   // let parsedUrl = new URL(req.url);
//   console.log(new URL(req));
//   res.end('hel')
// })

// server.listen(3000,() => {
//   console.log(`http://localhost:3000`);
// })

import { URL } from "url";
import { createServer } from "http";


let server = createServer((req,res) => {
  const myURL = new URL(`http://localhost:3000`)
  // console.log(myURL);
  console.log(req)
  // res.statusCode = 200;  
  // res.setHeader("Content-Type" , "text/plain")
  res.end('hello World');
})


server.listen(3000,() => {
  console.log(`http://localhost:3000`);
})