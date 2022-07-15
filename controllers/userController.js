const User=require('../models/userModel')


//register=> /api/users/register

exports.register=async (req, res)=>{
    const {name, email, password}=req.body
    const newUser=new User({name, email, password})
    try{
        newUser.save()
        res.send('User Registered Successfully')
    }catch(error){
        return res.status(400).json({message:'error'});
    }
}


//login => /api/users/login
exports.login=async (req, res)=>{
    const {email,password}=req.body
    try{
        const user=await User.find({email, password})
        if(user.length>0){
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id,
            }
            res.send(currentUser)
        }else{
            return res.status(400).json({message:'error'});
        }
    }catch(error){
        return res.status(400).json({message:'Something went wrong'});
    }
}


//getallusers => /api/users/getallusers
exports.getAllUsers=async (req, res)=>{
    try{
        const users=await User.find({})
        res.send(users)
    }catch(error){
        return res.status(400).json({message:'error'});
    }
}

//delete a user =>/api/users/deleteuser

exports.deleteUser = async (req, res)=>{
    const userid=req.body.userid
    try{
        await User.findOneAndDelete({_id: userid})
        res.send('User Deleted Successfully')
    }catch(error){
        return res.status(400).json({message:'error'});
    }
}