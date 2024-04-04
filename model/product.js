const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    id: {type:Number,min:[0,'Id is not correct'],max:[5000,'Id is to high']},
    title: {type:String,required:true},
    description: String,
    price: {type:Number,required:true,min:[50,'Price is to low']},
    discountPercentage: {type:Number,min:[2,'Discount Percent is too low'],max:[50,'Discount Percent is too high']},
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images:[String]
  });
  
  exports.Product = mongoose.model('Product', productSchema);
  
  