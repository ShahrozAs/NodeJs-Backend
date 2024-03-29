// const lib=require('./lib.js') //  for common js CJS
// // import {sum,diff} from './lib.js'   for ESM

// const fs=require('fs')
// console.time();
// // const text=fs.readFileSync("demo.txt",'utf-8')// for sync read node is server so we want to continoues run
// fs.readFile("demo.txt",'utf-8',(err,txt)=>{
//     console.log(txt)
// });
// console.timeEnd();
// // console.log(text)
// console.log(lib.diff(25,5))

// const express=require("express")
// const server=express()
// server.listen(8080);

// console.log("hello world")
// console.log("hello world 2")
// console.log("hello world 3")

const http = require("http");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const html = fs.readFileSync("index.html", "utf-8");
const products = data.products;


const server = http.createServer((req, res) => {
 
    

 if (req.url.startsWith('/product')) {
    console.log(req.url , req.method)
    const id=req.url.split('').pop();
    const product=products.find(p=>p.id===(+id))
    //  console.log(id)
    res.setHeader('Content-Type','text/html');
    let modifiedHtml=html.replace('**url**',product.thumbnail);
    res.end(modifiedHtml)
    return;
 }
    
  console.log("Server started");
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404, "Not Found");
      res.end();
      break;
  }
});

server.listen(8080);
