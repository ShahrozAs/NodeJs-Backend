const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const html = fs.readFileSync("index.html", "utf-8");
const products = data.products;

const express = require("express");
const morgan=require('morgan');


const server = express();

// server.use((req, res, next) => {
//  console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//  );
//   next();
// });

// server.use(morgan('default'));

//bodyparser read from body json data
server.use(express.json());
//Server.use(express.urlencoded());

//Static Hosting
server.use(express.static('public'));

// const auth = (req, res, next) => {
//   // if (req.body.password === "123") {
//   //   next();
//   // } else {
//   //   res.sendStatus(401);
//   // }
//   next();
// };

// API-Endpoints-Routes
// API ROOT ,Base URL,example google.com/api/v2/


// READ GET /products  perform C R U D Operations
server.get("/products",(req,res)=>{
  res.json(products);
})

// READ GET One /product
server.get("/product/:id",  (req, res) => {
  console.log(req.params.id);
  const id=+req.params.id;
  const product=products.find(p=>p.id===id);
  res.json(product)
  // res.send("hello world");
  // res.sendFile('C:/Users/f3558/OneDrive/Desktop/React/Node-app/index.html')
  // res.json(data)
  // res.sendStatus(404)
  // res.status(201).send('<h1>Hello world</h1>')
  // res.json({ type: "GET 1" });
}); //Always run top Code then Server Top when Api hits



server.post("/products",  (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
});

server.put("/products/:id",  (req, res) => {
  const id =+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
 const modifiedProduct= products.splice(productIndex,1,{...req.body,id:id})

  res.json(modifiedProduct);
});
server.patch("/products/:id",  (req, res) => {
  const id =+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
  const product=products[productIndex];
  const modifiedProduct= products.splice(productIndex,1,{...product,...req.body})
  
  res.status(201).json(modifiedProduct);
});

server.delete("/products/:id",  (req, res) => {
  const id =+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
 const modifiedProduct= products.splice(productIndex,1)

  res.status(201).json(modifiedProduct);
});





server.listen(8080, () => {
  console.log("Server Start");
});
