const mongoose=require('mongoose')
let mongoURL='mongodb+srv://Rasel:100Rasel.Z@cluster0.l04xe.mongodb.net/Ticket'
mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})
let db=mongoose.connection

db.on('connected',()=>{
    console.log(`MongoDB connection successfull`)
})
db.on('error',()=>{
    console.log(`MongoDB connection Failed`)
})
module.exports=mongoose