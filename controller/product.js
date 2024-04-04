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

exports.getAllPrducts = (req, res) => {
  res.json(products);
};

exports.getOneProduct = (req, res) => {
  // console.log(req.params.id);
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const modifiedProduct = products.splice(productIndex, 1, {
    ...req.body,
    id: id,
  });
  res.json(modifiedProduct);
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  const modifiedProduct = products.splice(productIndex, 1, {
    ...product,
    ...req.body,
  });
  res.status(201).json(modifiedProduct);
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const modifiedProduct = products.splice(productIndex, 1);
  res.status(201).json(modifiedProduct);
};
