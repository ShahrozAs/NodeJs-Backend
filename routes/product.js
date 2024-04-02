
const express=require('express');
const productController=require('../controller/product')
const router=express.Router()

//MVC model view controller
router
.get("/",productController.getAllPrducts)
.get("/:id", productController.getOneProduct)
.post("/", productController.createProduct)
.put("/:id", productController.replaceProduct)
.patch("/:id", productController.updateProduct)
.delete("/:id", productController.deleteProduct);

exports.router=router;