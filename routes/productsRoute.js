const express=require('express');
const router=express.Router();
const Product=require('../models/productModel')

router.get('/getallproducts', async(req,res)=>{
    try{
        const products=await Product.find({})
        res.send(products)
    }catch (error){
        return res.status(400).json({message:error})
    }
});

router.post('/addproduct',async(req,res)=>{
    
     try{
        const product=await req.body.product

        const newproduct=new Product({
            name:product.name,
            description:product.description,
            price:product.price        

        })
        await newproduct.save()
        res.send('New product Added Successfully')
     }catch(error){
        return res.status(400).json({message:error})
     }
});




router.post('/getproductbyid',async(req,res)=>{
    const productid=req.body.productid
    try{
       const product=await Product.findOne({_id:productid})       
       res.send(product)
       }catch(error){
       return res.status(400).json({message:error})
    }
});

router.post('/editproduct',async(req,res)=>{
    const editedproduct=req.body.editedproduct
    try{
       const product=await Product.findOne({_id:editedproduct._id}) 

       product.name=editedproduct.name,
       product.description=editedproduct.description,
       product.price=editedproduct.price,


       await product.save(product)

       res.send('Product Detailes Edited Successfully')
       }catch(error){
       return res.status(400).json({message:error})
    }
});

router.post('/deleteproduct',async(req,res)=>{
    const productid=req.body.productid 
    try{
       await Product.findOneAndDelete({_id:productid})       
       res.send('Deleted Successfully')
       }catch(error){
       return res.status(400).json({message:error})
    }
});
module.exports=router;