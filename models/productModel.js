const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    name:{type: String, require},
   /*  varients:[], */
    price:{type: Number, require},
 /*    category:{type: String, require},
    image: {type: String, require}, */
    description: {type: String, require}
},{
    timestamps:true,
})

const pizzaModel=mongoose.model('products',productSchema)
module.exports=pizzaModel