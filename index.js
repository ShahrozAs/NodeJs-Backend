

const express = require("express");
const server = express();
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')


//bodyparser read from body json data
server.use(express.json());
//Static Hosting
server.use(express.static("public"));

server.use('/products',productRouter.router);
server.use('/users',userRouter.router);


server.listen(8080, () => {
  console.log("Server Start");
});
