
const express=require('express');
const userController=require('../controller/user')
const router=express.Router()

//MVC model view controller
router
.get("/",userController.getAllPrducts)
.get("/:id", userController.getOneProduct)
.post("/", userController.createProduct)
.put("/:id", userController.replaceProduct)
.patch("/:id", userController.updateProduct)
.delete("/:id", userController.deleteProduct);

exports.router=router;