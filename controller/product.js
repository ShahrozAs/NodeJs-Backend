// const fs=require('fs');

// const data=JSON.parse(fs.readFileSync("data.json","utf-8"));
// const products=data.products;
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = async(req, res) => {
  const product = new Product( req.body);


  const saveProduct=await product.save()
  res.json(saveProduct);
};

exports.getAllPrducts = async(req, res) => {
  const allProduct=await Product.find();
  res.json(allProduct);
};

exports.getOneProduct = async(req, res) => {
  // console.log(req.params.id);
  const id = +req.params.id;
const product=await Product.findOne({'id':id}).exec();
  res.json(product);
};

exports.replaceProduct =async (req, res) => {
  const id = +req.params.id;
  const replaceProduct=await Product.findOneAndReplace({'id':id},req.body,)
  res.json(replaceProduct);
};

exports.updateProduct =async (req, res) => {
  const id = +req.params.id;
 const updateProduct=await Product.findOneAndUpdate({'id':id},req.body)
  res.status(201).json(updateProduct);
};

exports.deleteProduct = async(req, res) => {
  const id = +req.params.id;
 const deleteProduct=await Product.findOneAndDelete({'id':id});
  res.status(201).json(deleteProduct);
};
