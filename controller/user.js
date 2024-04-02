
const fs=require('fs');

const data=JSON.parse(fs.readFileSync("data.json","utf-8"));
const users=data.users;

exports.createProduct = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
  };
  
  exports.getAllPrducts = (req, res) => {
    res.json(users);
  };
  
  exports.getOneProduct = (req, res) => {
    // console.log(req.params.id);
    const id = +req.params.id;
    const product = users.find((p) => p.id === id);
    res.json(product);
  };
  
  exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex((p) => p.id === id);
    const modifiedProduct = users.splice(productIndex, 1, {
      ...req.body,
      id: id,
    });
    res.json(modifiedProduct);
  };
  
  exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex((p) => p.id === id);
    const product = users[productIndex];
    const modifiedProduct = users.splice(productIndex, 1, {
      ...product,
      ...req.body,
    });
    res.status(201).json(modifiedProduct);
  };
  
  exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex((p) => p.id === id);
    const modifiedProduct = users.splice(productIndex, 1);
    res.status(201).json(modifiedProduct);
  };