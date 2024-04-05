

const express = require('express');
require('dotenv').config()
const server = express();
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')
const mongoose = require('mongoose');
const cors= require('cors')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
   console.log('Database connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//bodyparser read from body json data
server.use(cors());
server.use(express.json());
//Static Hosting
server.use(express.static('public'));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);






server.listen(8080, () => {
  console.log("Server Start");
});
