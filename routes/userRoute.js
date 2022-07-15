const express=require('express');
const router=express.Router();
const {register, login, getAllUsers, deleteUser}=require('../controllers/userController')


//register=> /api/users/register
router.post('/register', register);

//login => /api/users/login
router.post('/login', login);

//getallusers => /api/users/getallusers
router.get('/getallusers', getAllUsers);

//delete a user =>/api/users/deleteuser
router.post('/deleteuser', deleteUser);

module.exports=router