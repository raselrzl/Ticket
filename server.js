const express=require("express")
const morgan=require("morgan");
const cors=require("cors");
const bodyParser=require("body-parser");
const dotenv=require('dotenv');


//setting up .env
dotenv.config({path:'.env'})


const app=express();

const db=require('./db')

app.use(express.json());

//import routes
const productRoute=require('./routes/productsRoute')
const userRoute=require('./routes/userRoute')
const ordersRoute=require('./routes/ordersRoute')


//app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(cors()); //allow all origin to send req
if(process.env.NODE_ENV === 'development') { 
    app.use(cors({origin: `http://localhost:3000`}));
}


//api routes
app.use('/api/products',productRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)


//server routes
app.get("/",(req, res)=>{
    res.send("Server running on port:" +port);
});



//PORT config
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}-${process.env.NODE_ENV} mode.`)
})