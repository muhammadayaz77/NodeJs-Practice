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



import {createServer} from 'node:http'
let PORT = 2024;
let server = createServer((req,res) => {
  if(req.url == '/'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');
  }
  else if(req.url == '/about'){
    res.end('about page')
  }
  else{
    res.writeHead(404,{"Content-Type" : "text/plain"})
    res.end('404 Not Found')
  }
})

server.listen(PORT,() => {
  console.log(`Live at : http://localhost:${PORT}`);
})