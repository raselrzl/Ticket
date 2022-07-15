const express=require('express');
const router=express.Router();
const Order=require('../models/orderModel')
const { v4: uuidv4 } = require('uuid');
const stripe=require('stripe')('sk_test_51GXb1nFLDJL4bUyBFDvKwbdtSFl9WSqCf2TcdzhYCNYEJqIDflWqbx6TdWxrKWvgH7b36sD2T2AjFn28shBpwNL500xbYHnpFl');

router.post('/placeorder', async (req, res)=>{
    const {token, subtotal, currentUser, cartItems}=req.body
    try{
        const customer=await stripe.customers.create({
            email:token.email, 
            source:token.id,
        })
        const payment=await stripe.charges.create({
            amount:subtotal*100,
            currency: 'SEK',
            customer: customer.id,
            receipt_email:token.email,
        },{
            idempotencyKey:uuidv4()
        })

        if(payment){
            const neworder=new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid:currentUser._id,
                orderItems:cartItems,
                orderAmount:subtotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    zipcode:token.card.address_zip
                },                
                transactionId:payment.source.id,
            })
            neworder.save()
            //telegram
            res.send('Order Placed Successfully')
        }else{
            res.send('Payment Failed')
        }
    }catch(error){
        return res.status(400).json({message:'Something Went Wrong' + error});
    }
});
router.post('/getuserorders',async (req,res)=>{
    const {userid}=req.body
    try{
        const orders=await Order.find({userid:userid}).sort({_id:-1})
        res.send(orders)
    }catch(error){
        return res.status(400).json({message:'Something Went Wrong'});
    }
})

router.get('/getallorders',async (req,res)=>{

    try{
        const orders=await Order.find({})
        res.send(orders)
    }catch(error){
        return res.status(400).json({message: error});
    }
})

router.post('/deliverorder',async (req,res)=>{
    const orderid=req.body.orderid
    try{
        const order=await Order.findOne({_id:orderid})
        order.isDelivered=true
        await order.save()
        res.send('Order Delivered successfully')
    }catch(error){
        return res.status(400).json({message: error});
    }
})

module.exports=router